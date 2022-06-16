# commands

* kubectl apply -f https://projectcontour.io/quickstart/contour-gateway-provisioner.yaml
* kubectl -n projectcontour get deployments

* kubectl apply -f - <<EOF
kind: GatewayClass
apiVersion: gateway.networking.k8s.io/v1alpha2
metadata:
  name: contour
spec:
  controllerName: projectcontour.io/gateway-controller
EOF

* kubectl apply -f - <<EOF
kind: Gateway
apiVersion: gateway.networking.k8s.io/v1alpha2
metadata:
  name: contour
  namespace: projectcontour
spec:
  gatewayClassName: contour
  listeners:
  * name: http
      protocol: HTTP
      port: 80
      allowedRoutes:
        namespaces:
          from: All
EOF

* kubectl -n projectcontour get gateways
* kubectl apply -f <https://projectcontour.io/examples/httpbin.yaml>
* kubectl get po,svc,ing -l app=httpbin
* kubectl -n projectcontour port-forward service/envoy-contour 8888:80

* kubectl run alpaca-prod --image=gcr.io/kuar-demo/kuard-amd64:blue --labels="ver=1,app=alpaca,env=prod"
* kubectl get ingress