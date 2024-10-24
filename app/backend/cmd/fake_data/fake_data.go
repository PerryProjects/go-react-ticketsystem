package fake_data

import (
	"backend/config"
	"backend/db"
	"backend/model"
	"encoding/base64"
	"fmt"
	"github.com/brianvoe/gofakeit/v7"
	"github.com/google/uuid"
	"github.com/spf13/cobra"
	"golang.org/x/crypto/argon2"
	"gorm.io/gorm"
)

const saltSize = 16

var FakeDataGenerator = &cobra.Command{
	Use:   "fakeData:generate:user",
	Short: "Generate fake data",
	Long:  `Generate fake data for testing purposes`,
	Run: func(cmd *cobra.Command, args []string) {
		count, _ := cmd.Flags().GetInt("count")

		if count <= 0 {
			fmt.Println("Please provide a positive integer for the count.")
			return
		}

		config.Init()
		dbManager := db.Init()
		users := map[int]*model.User{}
		for i := 0; i < count; i++ {

			salt := make([]byte, 64)

			// Todo: fix salt should be unique but where i get the salt from to verify the password
			hashedPassword := argon2.IDKey([]byte(gofakeit.Password(true, true, true, true, false, gofakeit.RandomInt([]int{10, 20}))), salt, 1, 64*1024, 4, 64)
			encodedPassword := base64.StdEncoding.EncodeToString(hashedPassword)

			users[i] = &model.User{
				ID:        uuid.MustParse(gofakeit.UUID()),
				FirstName: gofakeit.FirstName(),
				LastName:  gofakeit.LastName(),
				Email:     gofakeit.Email(),
				Password:  encodedPassword,
				Active:    gofakeit.Bool(),
			}
		}
		_ = dbManager.Transaction(func(tx *gorm.DB) error {
			for _, user := range users {
				tx.Create(user)
			}
			return nil
		})
	},
}

func init() {
	FakeDataGenerator.Flags().IntP("count", "c", 10, "Number of fake users to generate")
}
