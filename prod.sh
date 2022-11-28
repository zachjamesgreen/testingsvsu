#!/bin/bash

npm run build
docker build . -t zachjamesgreen/testsvprod
docker push zachjamesgreen/testsvprod