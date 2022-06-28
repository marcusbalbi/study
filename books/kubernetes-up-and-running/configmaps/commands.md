* kubectl create configmap my-config --from-file=my-config.txt --from-literal=extra-param=extra-value --from-literal=another-parma=second-value
* kubectl get configmaps
* kubectl get configmaps my-config -o yaml > config-map-my-config-sample.yml
* kubectl port-forward kuard-config 8080:8080
* curl -o kuard.crt https://storage.googleapis.com/kuar-demo/kuard.crt
* curl -o kuard.key https://storage.googleapis.com/kuar-demo/kuard.key
* kubectl create secret generic kuard-tls --from-file=kuard.crt --from-file=kuard.key
* kubectl describe secrets kuard-tls
* kubectl create secret docker-registry my-image-pull-secret --docker-username= --docker-server= --docker-password= --docker-email=
* kubectl get secrets

