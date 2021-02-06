package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
)

type logWriter struct{}

func (logWriter) Write(p []byte) (n int, err error) {
	fmt.Println("\n\nBEGIN:\n\n")
	fmt.Println(string(p))
	fmt.Println(string(p))
	fmt.Println("\n\n=====================================================================================================FIM")
	return len(p), nil
}

type saveToFileWriter struct {
	filaname string
}

func (sfw saveToFileWriter) Write(p []byte) (n int, err error) {
	return len(p), ioutil.WriteFile(sfw.filaname, p, 0666)
}

func main() {
	resp, error := http.Get("http://www.google.com")

	if error != nil {
		fmt.Println("Error", error)
		os.Exit(1)
	}

	// bs := make([]byte, 99999)
	// dataRead, error := resp.Body.Read(bs)
	// fmt.Println(string(bs), dataRead)
	// writer := logWriter{}
	saveLogWriter := saveToFileWriter{filaname: "google.html"}
	io.Copy(saveLogWriter, resp.Body)
}
