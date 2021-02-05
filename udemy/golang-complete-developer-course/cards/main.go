package main

func main() {
	// var card string = "Ace of Spades"
	// card := "Ace of spades"
	// card = "Five of diamonds"
	// card := newCard()
	// fmt.Println(card)

	// cards := []string{newCard(), "Ace of spades"}
	// cards := deck{newCard(), "Ace of spades"}
	// cards = append(cards, "two of hearts")
	// cards.print()

	// cards := newDeck()

	// hand, remainingCards := deal(cards, 5)

	// remainingCards.print()
	// hand.print()

	// encodedString := []byte("MARCUS BALBI")

	// fmt.Println(encodedString)

	// cards := newDeck()

	// fmt.Println(cards.toString())

	// cards.saveToFile("first_deck.deck")

	// savedCards := newDeckFromFile("first_deck.deck")
	// savedCards.print()

	cards := newDeck()

	cards.shuffle()
	cards.print()
}

// func newCard() string {
// 	return "five of Diamonds"
// }
