.PHONY: migration-up migration-down

migration-up:
	go run cmd/main.go migration:up
migration-down:
	go run cmd/main.go migration:down
migration-create:
	migrate create -ext sql -dir db/migrations  $(name)
