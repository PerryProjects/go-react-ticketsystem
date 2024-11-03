package server

import (
	_ "backend/docs"
	"backend/handler"
	"backend/router"
	echoSwagger "github.com/swaggo/echo-swagger"
)

func Init() {
	r := router.NewRouter()
	r.GET("/swagger/*", echoSwagger.WrapHandler)

	r.POST("/login", handler.Login)

	r.GET("/user", handler.GetUser)
	r.POST("/user", handler.CreateUser)
	r.PUT("/user", handler.UpdateUser)
	r.DELETE("/user", handler.DeleteUser)

	if err := r.Start(":8080"); err != nil {
		panic(err)
	}
}
