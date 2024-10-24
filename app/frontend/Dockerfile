# frontend/Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Install corepack which includes yarn
RUN corepack enable \
    && corepack prepare yarn@latest --activate

# Copy the rest of the application code
COPY ../frontend .

# Install dependencies using Yarn
RUN cd /app \
    && yarn install

# Start the Next.js app
CMD ["yarn", "dev"]
