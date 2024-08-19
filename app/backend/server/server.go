package server

import (
	echoSwagger "github.com/swaggo/echo-swagger"
)

func Init() {
	r := NewRouter()

	r.GET("/swagger/*", echoSwagger.WrapHandler)

	if err := r.Start(":8080"); err != nil {
		panic(err)
	}
}
