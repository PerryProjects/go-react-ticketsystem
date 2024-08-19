package env

import (
	"fmt"
	"github.com/spf13/viper"
	"os"
	"strings"
)

func loadEnvFiles() {
	// Store original environment variables
	originalEnv := make(map[string]string)
	for _, env := range os.Environ() {
		pair := strings.SplitN(env, "=", 2)
		originalEnv[pair[0]] = pair[1]
	}

	viper.SetConfigType("env")

	// Load base .env file
	viper.SetConfigFile("env/.env")
	if err := viper.ReadInConfig(); err != nil {
		fmt.Printf("Error reading .env file: %v\n", err)
	}

	// Override with .env.local
	viper.SetConfigFile("env/.env.local")
	if err := viper.MergeInConfig(); err != nil {
		fmt.Printf("Error reading .env.local file: %v\n", err)
	}

	// Load environment-specific files if APP_ENV is set
	appEnv := os.Getenv("APP_ENV")
	if appEnv != "" {
		envFile := fmt.Sprintf("env/.env.%s", strings.ToLower(appEnv))
		viper.SetConfigFile(envFile)
		if err := viper.MergeInConfig(); err != nil {
			fmt.Printf("Error reading %s file: %v\n", envFile, err)
		}

		localEnvFile := fmt.Sprintf("env/.env.%s.local", strings.ToLower(appEnv))
		viper.SetConfigFile(localEnvFile)
		if err := viper.MergeInConfig(); err != nil {
			fmt.Printf("Error reading %s file: %v\n", localEnvFile, err)
		}
	}

	// Restore original environment variables
	for key, value := range originalEnv {
		viper.Set(key, value)
	}
}

func Init() {
	loadEnvFiles()
}

func IsDev() bool {
	appEnv := os.Getenv("APP_ENV")
	if appEnv == "" {
		Init()
		appEnv = os.Getenv("APP_ENV")
	}

	return strings.ToLower(appEnv) == "dev"
}
