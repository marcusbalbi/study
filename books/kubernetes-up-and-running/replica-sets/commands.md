# commands

* kubectl describe replicasets kuard
* kubectl get pods kuard-4mvlc -o yaml
* kubectl get pods -l app=kuard,version=2
* kubectl scale replicasets kuard --replicas=4

* kubectl get pods --namespace=kube-system
* kubectl autoscale rs kuard --min=2 --max=5 --cpu-percent=80
* kubectl get hpa
* kubectl delete rs kuard
* kubectl delete rs kuard --cascade=false // delete only replicaset
