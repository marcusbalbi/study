## Commands

* kubectl create namespace jupyter
* watch kubectl get pods --namespace jupyter
* kubectl get pods --namespace jupyter --no-headers | awk '{print $1}')
* kubectl logs --namespace jupyter jupyter-5f9f8899bf-r9g95

?token=61ee0715390969fbedbd031de39780217f0d67b4579a1166

* kubectl port-forward --namespace jupyter jupyter-5f9f8899bf-r9g95 8888:8888
