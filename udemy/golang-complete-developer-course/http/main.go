package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	resp, error := http.Get("http://www.google.com")

	if error != nil {
		fmt.Println("Error", error)
		os.Exit(1)
	}

	bs := make([]byte, 99999)
	dataRead, error := resp.Body.Read(bs)

	fmt.Println(string(bs), dataRead)
}
