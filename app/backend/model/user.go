package model

import (
	"github.com/google/uuid"
)

type User struct {
	ID        uuid.UUID `json:"id" db:"id"`
	FirstName string    `json:"firstName" db:"first_name"`
	LastName  string    `json:"lastName" db:"last_name"`
	Email     string    `json:"email" db:"email"`
	Password  string    `json:"password" db:"password"`
	Active    bool      `json:"active" db:"active"`
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
