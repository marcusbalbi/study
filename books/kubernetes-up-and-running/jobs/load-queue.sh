#!/bin/bash

#curl -X PUT localhost:8080/memq/server/queues/keygen

#for i in {0..50}; do echo "$i"; done
for i in {0..99}; do 
  curl -X POST localhost:8080/memq/server/queues/keygen/enqueue -d "work-item-$i"
done