package env

import (
	"os"
	"strings"

	"github.com/joho/godotenv"
)

func loadEnvFiles() {
	originalEnv := make(map[string]string)
	for _, env := range os.Environ() {
		pair := strings.SplitN(env, "=", 2)
		originalEnv[pair[0]] = pair[1]
	}

	godotenv.Load(".env")

	godotenv.Overload(".env.local")

	appEnv := os.Getenv("APP_ENV")

	if appEnv != "" {
		godotenv.Overload(".env." + strings.ToLower(appEnv))

		godotenv.Overload(".env." + strings.ToLower(appEnv) + ".local")
	}

	for key, value := range originalEnv {
		os.Setenv(key, value)
	}
}

func LoadEnv() {
	loadEnvFiles()
}

func IsDev() bool {
	appEnv := os.Getenv("APP_ENV")
	if appEnv == "" {
		LoadEnv()
		appEnv = os.Getenv("APP_ENV")
	}

	return strings.ToLower(appEnv) == "dev"
}
