package main

import (
	"os"
	"testing"
)

func TestNewDeck(t *testing.T) {
	d := newDeck()
	if len(d) != 52 {
		t.Errorf("Expected deck length of 52 but got %v", len(d))
	}

	if d[0] != "Ace of Spades" {
		t.Errorf("The first card of deck should be Ace of Spades got %v", d[0])
	}

	if d[len(d)-1] != "King of Clubs" {
		t.Errorf("The last card of deck should be King of Clubs got %v", d[len(d)-1])
	}
}

func TestSaveToDeckAndNewDeckFromFile(t *testing.T) {
	os.Remove("_decktesting.deck")

	deck := newDeck()
	deck.saveToFile("_decktesting.deck")

	loadedDeck := newDeckFromFile("_decktesting.deck")

	if len(loadedDeck) != 1 {
		t.Errorf("Expected deck length of 52 but got %v", len(loadedDeck))
	}

	os.Remove("_decktesting.deck")
}
