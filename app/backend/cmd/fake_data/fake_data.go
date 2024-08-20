package fake_data

import (
	"backend/config"
	"backend/db"
	"backend/model"
	"github.com/brianvoe/gofakeit/v7"
	"github.com/spf13/cobra"
)

type FakeData struct {
	user model.User
}

var FakeDataGenerator = &cobra.Command{
	Use:   "fakeData:generate",
	Short: "Generate fake data",
	Long:  `Generate fake data for testing purposes`,
	Run: func(cmd *cobra.Command, args []string) {
		config.Init()
		dbManager := db.Init()
		f := &FakeData{}
		for i := 0; i < 10; i++ {
			user := f.NewUser()
			dbManager.Create(user)
		}
	},
}

func (f *FakeData) NewUser() *model.User {
	gofakeit.Seed(0)
	f.user = model.User{
		FirstName: gofakeit.FirstName(),
		LastName:  gofakeit.LastName(),
		Email:     gofakeit.Email(),
		Password:  gofakeit.Password(true, true, true, true, true, 10),
		Active:    gofakeit.Bool(),
	}
	return &f.user
}
