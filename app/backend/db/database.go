package db

import (
	"backend/pkg/config"
	"context"
	"fmt"
	"github.com/jackc/pgx/v5/pgxpool"
	"sync"
)

var (
	dbPool  *pgxpool.Pool
	once    sync.Once
	initErr error
)

type Db struct {
	Pool *pgxpool.Pool
}

func Init(ctx context.Context) (*pgxpool.Pool, error) {
	once.Do(func() {

		c := config.Config()
		databaseURL, ok := c.Get("DATABASE_URL").(string)
		if !ok || databaseURL == "" {
			initErr = fmt.Errorf("database URL not provided or invalid")
			return
		}

		// Pool initialisieren
		dbPool, initErr = pgxpool.New(ctx, databaseURL)
		if initErr != nil {
			return
		}
	})

	return dbPool, initErr
}

func Pool() (*pgxpool.Pool, error) {
	if dbPool == nil {
		return nil, fmt.Errorf("database pool is not initialized")
	}
	return dbPool, nil
}
