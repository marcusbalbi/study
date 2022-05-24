FROM alpine
# creates intermediate containers/image for each step
RUN apk add --update redis
# it caches each step if equals
# if changes it will re run from the line down
RUN apk add --update gcc
CMD ["redis-server"]
