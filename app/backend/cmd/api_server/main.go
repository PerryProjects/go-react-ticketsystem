package main

import (
	"backend/pkg/env"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	env.LoadEnv()

	if env.IsDev() {
		gin.SetMode(gin.DebugMode)
	} else {
		gin.SetMode(gin.ReleaseMode)
	}

	r := gin.New()

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
