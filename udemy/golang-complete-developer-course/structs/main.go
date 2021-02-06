package main

import "fmt"

type contactInfo struct {
	email   string
	zipcode int
}

type person struct {
	firstName string
	lastName  string
	contact   contactInfo
}

func main() {
	// alex := person{"Alex", "Anderson"}

	// alex := person{firstName: "Alex", lastName: "Anderson"}

	// var alex person
	// alex.firstName = "Alex"
	// alex.lastName = "Anderson"
	// alex.contact.email = "alex_example_anderson@test.com"
	// alex.contact.zipcode = 2222
	// fmt.Println(alex)

	marcus := person{
		firstName: "Marcus",
		lastName:  "Balbi",
		contact: contactInfo{
			email:   "balbimarcus@gmail.com",
			zipcode: 28665544,
		},
	}

	marcus.print()
	marcus.updateName("Silva")
	marcus.print()

	test := "teste"
	fmt.Println(&test)

}

func (p person) updateName(newName string) {
	p.firstName = newName
}

func (p person) print() {
	fmt.Printf("%+v\n", p)
}
