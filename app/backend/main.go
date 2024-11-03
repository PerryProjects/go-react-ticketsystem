package main

import (
	"backend/db"
	"backend/pkg/config"
	"backend/server"
	"context"
)

// @title Ticketsystem API
// @version 1.0
// @description This is a Ticketsystem.
// @termsOfService http://swagger.io/terms/

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host api.ticketsystem.perry-projects
// @BasePath
func main() {
	ctx := context.Background()
	config.Init()

	dbpool, err := db.Init(ctx)
	if err != nil {
		panic(err)
	}
	defer dbpool.Close()

	server.Init()
}
