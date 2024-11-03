package migration

import (
	"backend/pkg/config"
	"database/sql"
	"fmt"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/pgx/v5"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/spf13/cobra"
)

var Up = &cobra.Command{
	Use:   "migration:up",
	Short: "Migrate files to Database",
	Long:  `Execute all migration files to the database with go-migrate`,
	Run: func(cmd *cobra.Command, args []string) {
		c := config.Config()
		dsn := fmt.Sprintf("%s", c.Get("DATABASE_URL"))

		db, err := sql.Open("pgx", dsn)
		if err != nil {
			panic(err)
		}

		driver, err := pgx.WithInstance(db, &pgx.Config{})

		if err != nil {
			panic(err)
		}
		m, err := migrate.NewWithDatabaseInstance(
			"file://db/migrations",
			"postgres", driver)

		if err != nil {
			panic(err)
		}

		m.Up() // or m.Steps(2) if you want to explicitly set the number of migrations to run*/
	},
}
