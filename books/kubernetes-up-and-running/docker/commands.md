# Commands

* docker tag marcusbalbi/multi-stage-example marcusbalbi/multi-stage-example:blue

* docker push marcusbalbi/multi-stage-example:blue

* docker run -d --name multi-stage-example -p 3000:80 marcusbalbi/multi-stage-example:blue

## Memory limit

* docker run -d --name multi-stage-example -p 3000:80 --memory 200m --memory-swap 1G marcusbalbi/multi-stage-example:blue

* docker logs -f multi-stage-example

## CPU shares

* docker run -d --name multi-stage-example -p 3000:80 --memory 200m --memory-swap 1G --cpu-shares 1024 marcusbalbi/multi-stage-example:blue

## cleaning

* docker system purge
* docker rmi marcusbalbi/multi-stage-example:blue
* docker rmi <image_id>
