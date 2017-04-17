#!/bin/sh
set -eu

## ENV vars for build
: ${BUILD_NUMBER:?"BUILD_NUMBER must be available in env"}
: ${ARTIFACTS_DIR:?"ARTIFACTS_DIR must be available in env"}

mkdir -p ${ARTIFACTS_DIR}

npm run build

zip -r apex_${BUILD_NUMBER}.zip public/*

mv *.zip ${ARTIFACTS_DIR}