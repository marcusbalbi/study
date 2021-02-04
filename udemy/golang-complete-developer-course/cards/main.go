package main

func main() {
	// var card string = "Ace of Spades"
	// card := "Ace of spades"
	// card = "Five of diamonds"
	// card := newCard()
	// fmt.Println(card)

	// cards := []string{newCard(), "Ace of spades"}
	cards := deck{newCard(), "Ace of spades"}
	cards = append(cards, "two of hearts")
	cards.print()

}

func newCard() string {
	return "five of Diamonds"
}
