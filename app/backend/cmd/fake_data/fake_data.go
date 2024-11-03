package fake_data

import (
	"backend/model"
	"backend/pkg/config"
	"backend/pkg/password_hasher"
	"fmt"
	"github.com/brianvoe/gofakeit/v7"
	"github.com/google/uuid"
	"github.com/spf13/cobra"
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
		users := map[int]*model.User{}
		for i := 0; i < count; i++ {

			encodedPassword, _ := password_hasher.HashPassword(gofakeit.Password(true, true, true, true, false, gofakeit.RandomInt([]int{10, 20})))

			users[i] = &model.User{
				ID:        uuid.MustParse(gofakeit.UUID()),
				FirstName: gofakeit.FirstName(),
				LastName:  gofakeit.LastName(),
				Email:     gofakeit.Email(),
				Password:  encodedPassword,
				Active:    gofakeit.Bool(),
			}
		}
	},
}

func init() {
	FakeDataGenerator.Flags().IntP("count", "c", 10, "Number of fake users to generate")
}
