# commands

## alpaca

* kubectl run alpaca-prod --image=gcr.io/kuar-demo/kuard-amd64:blue --labels="ver=1,app=alpaca,env=prod"
* kubectl run alpaca-test --image=gcr.io/kuar-demo/kuard-amd64:green --labels="ver=2,app=alpaca,env=test"

## bandicoot

* kubectl run bandicoot-prod --image=gcr.io/kuar-demo/kuard-amd64:green --labels="ver=2,app=bandicoot,env=prod"
* kubectl run bandicoot-staging --image=gcr.io/kuar-demo/kuard-amd64:green --labels="ver=2,app=bandicoot,env=staging"

## others

* kubectl get pods --show-labels
* kubectl label pods alpaca-test "canary=true"
* kubectl get pods -L canary // column canary
* kubectl label pods alpaca-test "canary-" // unlabel

* kubectl get pods --selector="ver=2"
* kubectl get pods --selector="ver=2,app=bandicoot" -L app
* kubectl get pods --selector="app in (alpaca, bandicoot)"
* kubectl get pods --selector="app!=bandicoot"
