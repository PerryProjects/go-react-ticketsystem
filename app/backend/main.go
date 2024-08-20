package main

import (
	"backend/config"
	"backend/db"
	"backend/server"
)

func main() {
	config.Init()
	db.Init()

	server.Init()
}
