# Commands

* see all namespaces flag: kubectl get pods --all-namespaces
* kubectl get namespaces

## config/context

* create context for namespace:  kubectl config set-context my-context --namespace=mystuff
* use context: kubectl config use-context my-context
* config path: /home/user/.kube/config
* kubectl config get-contexts

## get

* kubectl get pods -o wide --all-namespaces
* kubectl get pods -o json --all-namespaces
* kubectl get pods  --all-namespaces --no-headers
* show pod ip: kubectl get pods kubernetes-dashboard-764b4dd7-cs659 -o jsonpath --template={.status.podIP} -n=kubernetes-dashboard

## describe

* kubectl describe pods kubernetes-dashboard-764b4dd7-cs659 -n=kubernetes-dashboard

## aply

* kubectl apply -f obj.yml
* only shows: kubectl apply -f obj.yml --dry-run

## edit

* edit obj and upload after: kubectl edit <resource> <obj>

## delete

* kubectl delete -f obj.yml
* kubectl delete <resource> <obj>

## label

* kubectl label pods bar color=red


## logs

* kubectl logs podname
* kubectl logs kubernetes-dashboard-764b4dd7-cs659 -n=kubernetes-dashboard -f

## exec

* kubectl exec -it kubernetes-dashboard-764b4dd7-cs659 -n=kubernetes-dashboard -- bash 
* kubectl attach -it  kubernetes-dashboard-764b4dd7-cs659 -n=kubernetes-dashboard


## cp

* kubectl cp  podname:remotepath localpath
* kubectl cp  localpath podname:remotepath

## port-forward

* kubectl port-forwart podname 8080:80

## others

 * kubectl top nodes
 * kubectl top pods --all-namespaces


