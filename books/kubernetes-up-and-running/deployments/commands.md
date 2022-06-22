* kubectl get deployments kuard -o jsonpath --template {.spec.selector.matchLabels}
* kubectl get replicasets --selector=run=kuard
* kubectl scale deployment kuard --replicas=2
* kubectl scale replicaset kuard-76ccd465b --replicas=1
* kubectl get deployments kuard  -o yaml > kuard-deployment-exported.yml
* kubectl replace -f kuard-deployment-exported.yml --save-config
* kubectl describe deployments kuard
* kubectl rollout status deployments client-deployment
* kubectl rollout pause deployments kuard
* kubectl rollout resume deployments kuard
* kubectl rollout history deployment kuard
* kubectl rollout history deployment kuard --revision=2
* kubectl rollout undo deployments kuard
* kubectl rollout undo deployments kuard --to-revision=3
* kubectl delete deployment kuard-deployment
* kubectl delete -f kuard-deployment.yml
