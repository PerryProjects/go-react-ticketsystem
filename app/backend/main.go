package main

import (
	"backend/config"
	"backend/models"
	"backend/server"
	"fmt"
)

func main() {
	config.Init()
	user := models.User{}

	j, _ := user.MarshalJSON()
	fmt.Println(string(j))
	server.Init()

}
