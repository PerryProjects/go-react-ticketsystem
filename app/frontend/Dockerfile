# frontend/Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Install corepack which includes yarn
RUN apt update && apt upgrade -y
RUN corepack enable \
    && corepack prepare yarn@latest --activate

# Start the Next.js app
CMD ["bash", "-c", "yarn install && yarn cache clean && yarn dev"]

RUN groupmod -g 1000 node && usermod -u 1000 -g 1000 node
USER node
