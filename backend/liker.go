package main

import (
	"fmt"
	"github.com/ahmdrz/goinsta"
	"time"
)

func SayHello() string {
	return "Hello"
}

func LikeUser(username string, password string, target string, counter int) error {

	inst := goinsta.New(username, password)
	if err := inst.Login(); err != nil {
		return err
	}
	fmt.Print("Login as " + username + "\n")

	inst.Export("~/.goinsta")

	user, err := inst.Profiles.ByName(target)
	if err != nil {
		return err
	}
	media := user.Feed()
	for media.Next() {
		for _, item := range media.Items {
			if counter == 0 {
				break
			}
			item.Like()
			time.Sleep(5 * time.Second)
			fmt.Print("liked " + item.Code + "\n")
			counter--
		}
	}
	err = inst.Logout()
	if err != nil {
		return err
	}
	return nil
}
