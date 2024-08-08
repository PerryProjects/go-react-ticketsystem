package env

import (
	"os"
	"strings"

	"github.com/joho/godotenv"
)

func ImportEnv() {
	godotenv.Load(".env")

	godotenv.Overload(".env.local")

	env := os.Getenv("APP_ENV")
	if env == "" {
		env = "prod"
	}

	env = strings.ToLower(env)

	godotenv.Overload(".env." + env)

	godotenv.Overload(".env." + env + ".local")

}

func IsDev() bool {
	if os.Getenv("APP_ENV") == "" {
		ImportEnv()
	}

	return strings.ToLower(os.Getenv("APP_ENV")) == "dev"
}
