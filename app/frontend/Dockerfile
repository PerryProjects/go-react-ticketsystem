# frontend/Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Install corepack which includes yarn
RUN corepack enable

# Enable Yarn 4
RUN corepack prepare yarn@4.3.1 --activate

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

RUN yarn next telemetry disable

# Start the Next.js app
CMD ["yarn", "dev"]
