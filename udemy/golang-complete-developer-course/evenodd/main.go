package main

import "fmt"

func createSliceOfNumbers(len int) []int {
	data := []int{}
	for i := 0; i < len; i++ {
		data = append(data, i)
	}
	return data
}

func main() {
	data := createSliceOfNumbers(600)

	for _, n := range data {
		if n%2 == 0 {
			fmt.Printf("Number %v is even\n", n)
		} else {
			fmt.Printf("Number %v is odd\n", n)
		}
	}
}
