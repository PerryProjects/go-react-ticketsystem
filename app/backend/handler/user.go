package handler

import (
	"backend/db"
	"backend/model"
	"backend/pkg/password_hasher"
	"context"
	"errors"
	"github.com/jackc/pgx/v5"
	"github.com/labstack/echo/v4"
	"net/http"
)

func GetUser(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func CreateUser(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func UpdateUser(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func DeleteUser(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// Login Route handler for user login
func Login(c echo.Context) error {
	var req LoginRequest

	if err := c.Bind(&req); err != nil {
		return c.JSON(http.StatusBadRequest, echo.Map{"error": "Invalid JSON"})
	}

	username := req.Username
	password := req.Password

	dbpool, _ := db.Pool()
	u := model.User{}
	err := dbpool.QueryRow(context.Background(), "SELECT id, first_name, last_name, email, password, active FROM users WHERE email = $1", username).Scan(&u.ID, &u.FirstName, &u.LastName, &u.Email, &u.Password, &u.Active)

	v, cpErr := password_hasher.CheckPassword(password, u.Password)

	if cpErr != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Password check error", "message": cpErr.Error()})
	}

	if err != nil || !v {
		if errors.Is(err, pgx.ErrNoRows) || !v {
			return c.JSON(http.StatusUnauthorized, echo.Map{"error": "Invalid credentials"})
		}
		return c.JSON(http.StatusInternalServerError, echo.Map{"error": "Query error", "message": err.Error()})
	}

	return c.JSON(http.StatusOK, u)
}
