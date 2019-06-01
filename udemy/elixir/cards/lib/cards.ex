defmodule Cards do
  def create_cards do
   # values = ["Ace", "Two", "Three", "Four", "Five"]
   values = Test.create_values()
   suits = ["Spades", "Clubs", "Hearts", "Diamonds"]
   cards = for value <- values do
    for suit <- suits do
      "#{value} of #{suit}"
    end
   end
   List.flatten(cards)
  end

  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  def contains?(deck, card) do
    Enum.member?(deck, card)
  end
end
