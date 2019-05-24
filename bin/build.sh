#!/bin/sh
COMMIT_SHA=$1
export IMAGE_FULL_TAG=$SHIFT_DOCKER_REGISTRY_HOST/boilerplate:$COMMIT_SHA
docker build -t $IMAGE_FULL_TAG .
