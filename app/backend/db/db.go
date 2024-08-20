package db

import (
	"backend/config"
	"backend/model"
	"fmt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db *gorm.DB
var err error

func Init() *gorm.DB {
	c := config.GetConfig()
	dsn := fmt.Sprintf("%s", c.Get("DATABASE_URL"))
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	// defer db.Close()
	if err != nil {
		panic("DB Connection Error")
	}
	autoMigrate(db)

	return db
}

func DbManager() *gorm.DB {
	return db
}

func autoMigrate(db *gorm.DB) {
	err := db.AutoMigrate(
		&model.User{},
	)
	if err != nil {
		panic("DB Migration Error")
	}
}
