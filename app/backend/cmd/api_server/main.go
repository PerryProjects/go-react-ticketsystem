package main

import (
	"backend/pkg/env"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	env.ImportEnv()

	if env.IsDev() {
		gin.SetMode(gin.DebugMode)
	} else {
		gin.SetMode(gin.ReleaseMode)
	}

	// Create a new Gin engine without any middleware attached
	r := gin.New()

	// Attach Logger and Recovery middleware manually
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	r.SetTrustedProxies([]string{"127.0.0.1"})

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	r.Run()
}
