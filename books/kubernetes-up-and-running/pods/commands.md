# COmmands

* kubectl run kuard --i,age=gcr.io/kuar-demo/kuard-amd64:blue
* kubectl get pods
* kubectl delete pods/kuard
* kubectl apply -f kuard-pod.yaml
* kubectl describe pods kuard
* kubectl delete -f kuard-pod.yaml

## port forward

* kubectl port-forward kuard 8080:8080
* kubectl logs kuard
* kubectl logs kuard -f
* kubectl exec kuard -- date
* kubectl exec -it kuard -- ash
* kubectl cp kuard:etc/hosts ./hosts
* kubectl cp ./hosts kuard:etc/hosts

