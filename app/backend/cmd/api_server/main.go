package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Foo interface {
    Bar(x int) int
  }

func main() {
    r := gin.Default()
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "message": "pong",
        })
    })

    r.SetTrustedProxies([]string{"127.0.0.1"})
    r.Run()
}