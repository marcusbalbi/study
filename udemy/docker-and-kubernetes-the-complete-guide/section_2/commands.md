# Comands

* docker run busybox echo "Hello there"
* docker run busybox ls
* docker ps
* docker ps --all
* docker create hello-world
* docker start _a CONTAINER_ID // print out output on terminal
* docker system prune // removes everything stopped
* docker logs CONTAINER_ID
* docker stop CONTAINER_ID // polite
* docker kill CONTAINER_ID */// stop right now!

* docker run redis
* docker container exec -it CONTAINER_ID redis-cli
* docker exec -it CONTAINER_ID bash/sh


## notes

* docker run = docker create + docker start

