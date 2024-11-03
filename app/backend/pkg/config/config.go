package config

import (
	"fmt"
	"github.com/spf13/viper"
	"os"
	"strings"
)

var config *viper.Viper

func Init() {
	config = viper.New()
	// Store original environment variables
	originalEnv := make(map[string]string)
	for _, env := range os.Environ() {
		pair := strings.SplitN(env, "=", 2)
		originalEnv[pair[0]] = pair[1]
	}

	config.SetConfigType("env")

	// Load base .env file
	config.SetConfigFile("env/.env")
	if err := config.ReadInConfig(); err != nil {
		fmt.Printf("Error reading .env file: %v\n", err)
	}

	// Override with .env.local
	config.SetConfigFile("env/.env.local")
	if err := config.MergeInConfig(); err != nil {
		fmt.Printf("Error reading .env.local file: %v\n", err)
	}

	// Load environment-specific files if APP_ENV is set
	appEnv := os.Getenv("APP_ENV")
	if appEnv != "" {
		envFile := fmt.Sprintf("env/.env.%s", strings.ToLower(appEnv))
		config.SetConfigFile(envFile)
		if err := config.MergeInConfig(); err != nil {
			fmt.Printf("Error reading %s file: %v\n", envFile, err)
		}

		localEnvFile := fmt.Sprintf("env/.env.%s.local", strings.ToLower(appEnv))
		config.SetConfigFile(localEnvFile)
		if err := config.MergeInConfig(); err != nil {
			fmt.Printf("Error reading %s file: %v\n", localEnvFile, err)
		}
	}

	// Restore original environment variables
	for key, value := range originalEnv {
		config.Set(key, value)
	}
}

func Config() *viper.Viper {
	return config
}

func IsDev() bool {
	appEnv := config.Get("APP_ENV").(string)
	if appEnv == "" {
		Init()
		appEnv = config.Get("APP_ENV").(string)
	}

	return strings.ToLower(appEnv) == "dev"
}
