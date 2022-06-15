# commands

* kubectl apply -f alpaca-deployment.yml
* kubectl expose pods alpaca-prod
* kubectl expose pods bandicoot-prod
* kubectl get services -o wide
* kubectl port-forward alpaca-prod 48858:8080
* kubectl port-forward $(kubectl get pods -l app=alpaca -o jsonpath='{.items[0].metadata.name}') 48858:8080
* kubectl edit pod/alpaca-prod
* kubectl get endpoints alpaca-prod --watch
* kubectl get endpoints alpaca-prod --watch

* kubectl get pods -o wide --show-labels
