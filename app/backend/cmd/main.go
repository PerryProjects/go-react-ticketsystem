package main

import (
	"backend/cmd/fake_data"
	"backend/config"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{}

func main() {
	config.Init()

	rootCmd.AddCommand(fake_data.FakeDataGenerator)

	if err := rootCmd.Execute(); err != nil {
		panic(err)
	}
}
