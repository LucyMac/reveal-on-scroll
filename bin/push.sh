#!/bin/sh
COMMIT_SHA=$1
docker login --username $SHIFT_DOCKER_REGISTRY_USERNAME --password $SHIFT_DOCKER_REGISTRY_PASSWORD $SHIFT_DOCKER_REGISTRY_HOST
export IMAGE_FULL_TAG=$SHIFT_DOCKER_REGISTRY_HOST/boilerplate:$COMMIT_SHA
docker push $IMAGE_FULL_TAG