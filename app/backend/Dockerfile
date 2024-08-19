# backend/Dockerfile

# Use the official Golang image
FROM golang:1.23

RUN apt-get update \
    && apt-get install -y ca-certificates curl gnupg \
    && mkdir -p /etc/apt/keyrings

WORKDIR /app

RUN go install go.uber.org/mock/mockgen@latest && \
    go install github.com/air-verse/air@latest

CMD ["air", "-c", ".air.toml"]
