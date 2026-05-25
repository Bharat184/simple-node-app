#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
docker pull bharatchimariya/simple-node-app:latest

# Run the Docker image as a container
docker run -d -p 3000:3000 bharatchimariya/simple-node-app:latest