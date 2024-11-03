package security

import (
	"backend/pkg/password_hasher"
	"fmt"
	"github.com/spf13/cobra"
	"golang.org/x/crypto/ssh/terminal"
	"os"
)

var HashPassword = &cobra.Command{
	Use:   "security:hash_password",
	Short: "Hash user password",
	Long:  `Generate fake data for testing purposes`,
	Run: func(cmd *cobra.Command, args []string) {
		p := enterPassword()

		fmt.Print("\n\n\n")
		fmt.Println("=====================================")

		password, err := password_hasher.HashPassword(string(p))
		if err != nil {
			fmt.Println("Error hashing password:", err)
			return
		}

		fmt.Println("Your hashed password is:", password)
		fmt.Println("=====================================")
	},
}

func enterPassword() []byte {
	stdin := 1
	_, err := fmt.Fprintf(os.Stdin, "Enter the password to hash: ")
	if err != nil {
		panic(err)
	}
	s, err := terminal.MakeRaw(stdin)

	defer func(fd int, oldState *terminal.State) {
		err := terminal.Restore(fd, oldState)
		if err != nil {
			panic(err)
		}
	}(stdin, s)

	password, err := terminal.ReadPassword(stdin)

	if err != nil {
		panic(err)
	}

	return password
}
