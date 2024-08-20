package model

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID        uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primary_key"`
	FirstName string
	LastName  string
	Email     string
	Password  string
	Active    bool
}

func NewUser(firstName string, lastName string, email string, password string, active bool) (*User, error) {
	u := &User{
		FirstName: firstName,
		LastName:  lastName,
		Email:     email,
		Password:  password,
		Active:    active,
	}

	return u, nil
}

func (u *User) fullName() string {
	return u.FirstName + " " + u.LastName
}
