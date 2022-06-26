* kubectl create configmap my-config --from-file=my-config.txt --from-literal=extra-param=extra-value --from-literal=another-parma=second-value
* kubectl get configmaps
* kubectl get configmaps my-config -o yaml > config-map-my-config-sample.yml
kubectl port-forward kuard-config 8080:8080
