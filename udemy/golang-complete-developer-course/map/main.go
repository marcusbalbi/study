package main

import "fmt"

func main() {
	// colors := map[string]string{
	// 	"red":   "#FF0000",
	// 	"green": "#00FF00",
	// 	"blue":  "#0000FF",
	// }

	// var colors = map[string]string{}

	// colors["red"] = "#FF0000"
	// colors["green"] = "#00FF00"
	// colors["blue"] = "#0000FF"

	var colors = make(map[string]string)

	colors["red"] = "#FF0000"
	colors["green"] = "#00FF00"
	colors["blue"] = "#0000FF"

	delete(colors, "blue")

	colors["blue"] = "#0000FF"
	colors["white"] = "#FFFFFF"
	colors["black"] = "#000000"

	printMap(colors)
}

func printMap(c map[string]string) {
	for color, hex := range c {
		fmt.Println("Hex code ", hex, "is color", color)
	}
}
