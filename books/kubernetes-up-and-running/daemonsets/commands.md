
* k3d node create k3d-k3s-default-server-1
* k3d node create k3d-k3s-default-server-2
* k3d node delete k3d-k3d-k3s-default-server-2-0
kubectl get nodes
kubectl label nodes k3d-k3s-default-server-0 ssd=true
kubectl get nodes -L ssd
kubectl get nodes -L ssd
