#!/bin/bash
export BUILD_VERSION=$1
if [ "$BUILD_VERSION" = "" ]; then
    echo "Missing build version parameter (Git commit SHA)"
    exit -1
fi

ENVIRONMENT_KEY=$( echo $2 | tr '[a-z]' '[A-Z]' )
if [ "$ENVIRONMENT_KEY" = "" ]; then
    echo "Missing environment parameter"
    exit -1
fi

AZURE_SP_USER="AZURE_SHIFT_${ENVIRONMENT_KEY}_SP_USER"
AZURE_SP_TENANT="AZURE_SHIFT_${ENVIRONMENT_KEY}_SP_TENANT"
AZURE_SP_PASSWORD="AZURE_SHIFT_${ENVIRONMENT_KEY}_SP_PASSWORD"
AZURE_SUBSCRIPTION_ID="AZURE_SHIFT_${ENVIRONMENT_KEY}_SUBSCRIPTION_ID"
AZURE_SUBSCRIPTION_ID=${!AZURE_SUBSCRIPTION_ID}

AZURE_RESOURCE_GROUP="AZURE_SHIFT_${ENVIRONMENT_KEY}_RESOURCE_GROUP"
AZURE_CLUSTER_NAME="AZURE_SHIFT_${ENVIRONMENT_KEY}_CLUSTER_NAME"

echo "Logging in to Azure"
az login -u ${!AZURE_SP_USER} --service-principal --tenant ${!AZURE_SP_TENANT} -p ${!AZURE_SP_PASSWORD}

if [ -z "$AZURE_SUBSCRIPTION_ID" ]; then
    echo "No subscription set - will use the default."
else
    az account set -s $AZURE_SUBSCRIPTION_ID
fi

echo "Get credentials from Azure for Kubernetes"
az aks get-credentials --resource-group=${!AZURE_RESOURCE_GROUP} --name=${!AZURE_CLUSTER_NAME}

echo "Performing kubernetes deployment"
kubectl apply -f kubernetes/service.yml
cat kubernetes/deployment.yml | envsubst | kubectl apply -f -
