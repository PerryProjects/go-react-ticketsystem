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

var Down = &cobra.Command{
	Use:   "migration:down",
	Short: "Takes migration down",
	Long:  `Generate fake data for testing purposes`,
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

		m.Steps(-1) // or m.Steps(2) if you want to explicitly set the number of migrations to run*/
	},
}
