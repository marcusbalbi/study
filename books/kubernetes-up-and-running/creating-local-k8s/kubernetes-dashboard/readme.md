* kubectl apply -f <https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.0/aio/deploy/recommended.yaml>

* URL: <http://127.0.0.1:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/deployment?namespace=default>

* kubectl get secrets -n=kubernetes-dashboard
* kubectl describe secrets -n=kubernetes-dashboard
