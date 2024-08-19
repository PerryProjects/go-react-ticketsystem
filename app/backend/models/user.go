package models

import (
	"encoding/json"
	"time"
)

type User struct {
	id        string
	firstName string
	lastName  string
	email     string
	password  string
	active    bool
	createdAt time.Time
	updatedAt time.Time
}

func NewUser(firstName string, lastName string, email string, password string, active bool) (*User, error) {
	u := &User{
		firstName: firstName,
		lastName:  lastName,
		email:     email,
		password:  password,
		active:    active,
		createdAt: time.Now(),
		updatedAt: time.Now(),
	}

	return u, nil
}

func (u *User) fullName() string {
	return u.firstName + " " + u.lastName
}

func (u *User) MarshalJSON() ([]byte, error) {
	type Alias User
	return json.Marshal(&struct {
		FullName  string    `json:"fullName"`
		Id        string    `json:"id,omitempty"`
		FirstName string    `json:"firstName"`
		LastName  string    `json:"lastName,omitempty"`
		Email     string    `json:"email"`
		Password  string    `json:"password,omitempty"`
		Active    bool      `json:"active"`
		CreatedAt time.Time `json:"createdAt,omitempty"`
		UpdatedAt time.Time `json:"updatedAt,omitempty"`
		*Alias
	}{
		FullName: u.fullName(),
		Alias:    (*Alias)(u),
	})
}
