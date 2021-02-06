package main

import "fmt"

type shape interface {
	getArea() float64
}

type square struct{ sideLength float64 }

type triangle struct {
	base   float64
	height float64
}

func (sq square) getArea() float64 {
	return sq.sideLength * sq.sideLength
}

func (tr triangle) getArea() float64 {
	return tr.base * 0.5 * tr.height
}

func printArea(shapeName string, s shape) {
	fmt.Println("The area of "+shapeName+" is: ", s.getArea())
}

func main() {
	sq1 := square{sideLength: 6}
	sq2 := square{sideLength: 3}
	tr1 := triangle{
		base:   3,
		height: 2.1,
	}

	tr2 := triangle{
		base:   4,
		height: 4,
	}

	printArea("square 1", sq1)
	printArea("square 2", sq2)

	printArea("triangle 1", tr1)
	printArea("triangle 2", tr2)

}
