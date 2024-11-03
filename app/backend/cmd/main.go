package main

import (
	"backend/cmd/fake_data"
	"backend/cmd/migration"
	"backend/cmd/security"
	"backend/pkg/config"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{}

func main() {
	config.Init()

	rootCmd.AddCommand(fake_data.FakeDataGenerator)
	rootCmd.AddCommand(security.HashPassword)
	rootCmd.AddCommand(migration.Up)
	rootCmd.AddCommand(migration.Down)

	if err := rootCmd.Execute(); err != nil {
		panic(err)
	}
}
