set -u
"$CONTAINER_REGISTRY"
"Latest"

envsubst < ./deploy.yml | kubectl apply -f -