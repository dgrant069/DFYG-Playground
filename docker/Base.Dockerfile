# Inorder to build there must be an ssh key named "id_rsa" in the root of the project
# The ssh needs to have access to all internal stash projects for garuda
FROM node:7

MAINTAINER Brett McGinnis brett@l4digital.com

ARG BUILD_DIR="/build"

WORKDIR ${BUILD_DIR}

RUN apt-get update && \
    apt-get install -y \
    zip

COPY package.json package.json
RUN npm install

COPY . .

ENV BUILD_DIR=${BUILD_DIR}
ENV ARTIFACTS_DIR "/artifacts"
ENV BUILD_NUMBER "dev"

CMD ./docker/scripts/build.sh
