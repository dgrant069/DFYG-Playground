#!groovy

properties([[$class: 'ParametersDefinitionProperty', parameterDefinitions: [
        [$class: 'hudson.model.StringParameterDefinition', defaultValue: '', description: 'Parameter from Bitbucket', name: 'PULL_REQUEST_TO_REPO_PROJECT_KEY'],
        [$class: 'hudson.model.StringParameterDefinition', defaultValue: '', description: 'Parameter from Bitbucket', name: 'PULL_REQUEST_TO_REPO_NAME'],
        [$class: 'hudson.model.StringParameterDefinition', defaultValue: '', description: 'Parameter from Bitbucket', name: 'PULL_REQUEST_ID']
]]])


timestamps {
    try {
        def s3RootPath = '/apex/web/'

        stashes = []
        builds = []

        node('master') {
            tryAddCommentToBitbucketPR {
                comment = "Starting build..."
            }

            checkout scm

            node('jnlp_docker_builder') {
                stage('checkout docker') {
                    checkout scm
                }

                def dockerRepository = "${env.JOB_NAME}".replace('/', '_').toLowerCase()
                def dockerTag = "${dockerRepository}:${env.BUILD_NUMBER}"
                def dockerContainerName = "${dockerRepository}_${env.BUILD_NUMBER}"

                stage('build docker') {
                    sh """docker build \
                            --pull \
                            -f docker/Base.Dockerfile \
                            -t ${dockerRepository}:${env.BUILD_NUMBER} \
                            ."""
                }

                stage('test docker') {
                    sh """docker run \
                            -e BUILD_NUMBER=${env.BUILD_NUMBER} \
                            --name ${dockerContainerName} \
                            ${dockerTag}"""

                    sh "docker cp ${dockerContainerName}:/artifacts ${env.WORKSPACE}"
                    sh "docker stop ${dockerContainerName}"
                }

                stash(includes: 'artifacts/**/*', name: 'WEB_ARTIFACTS')
            }

            stage('Archive') {
                withCredentials([[
                                         $class       : 'AmazonWebServicesCredentialsBinding',
                                         credentialsId: "f2628c82-cf1b-45a6-82b7-a7c6fa048ac8",
                                         variable     : 'AWS_ACCESS_KEY_ID']]) {

                    unstash 'WEB_ARTIFACTS'

                    def envBranchName = env.BRANCH_NAME.toString()

                    def folderPath = getArtifactPath {
                        branchName = envBranchName
                    }

                    s3UploadGlob {
                        glob = "artifacts/*.zip"
                        bucket = "sbg-build-artifacts"
                        path = "${s3RootPath}/${folderPath}"
                    }


                    if (currentBuild.description == null) {
                        currentBuild.description = ''
                    }

                    currentBuild.description += "S3 artifact location: <a href=\"" + getS3Url(bucket: "sbg-build-artifacts", path: "${s3RootPath}/${folderPath}") + "\" target=\"_blank\">${sanitizeS3Path(s3RootPath + '/' + folderPath)}</a>"

                }
            }

            tryAddCommentToBitbucketPR {
                comment = "Success"
            }
        }

    } catch (Exception e) {
        tryAddCommentToBitbucketPR {
            comment = "Failed build (${e.message})"
        }

        throw e;
    }
}

