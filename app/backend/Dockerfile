# backend/Dockerfile

# Use the official Golang image
FROM golang:1.18

# Set the working directory in the container
WORKDIR /app

# Copy go.mod and go.sum
COPY go.mod go.sum ./

# Download Go modules
RUN go mod download

# Copy the rest of the application code
COPY . .

# Build the Go app
RUN go build -o main .

# Start the Go app
CMD ["./main"]