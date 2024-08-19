package server

import (
	"backend/config"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/gommon/log"
)

func NewRouter() *echo.Echo {
	e := echo.New()
	c := config.GetConfig()

	if c.Get("APP_ENV") == "production" {
		e.Logger.SetLevel(log.INFO)
	} else {
		e.Logger.SetLevel(log.DEBUG)
	}

	e.Pre(middleware.Logger())
	e.Use(middleware.Recover())

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept, echo.HeaderAuthorization},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	return e
}
