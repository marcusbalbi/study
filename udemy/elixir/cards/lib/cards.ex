defmodule Cards do
  def create_cards do
    values = Test.create_values()
    suits = ["Spades", "Clubs", "Hearts", "Diamonds"]
    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end
  end

  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  def contains?(deck, card) do
    Enum.member?(deck, card)
  end

  def deal(deck, nCards) do
    Enum.split(deck, nCards)
  end

  def save(deck, filename) do
    binary = :erlang.term_to_binary(deck)
    File.write(filename, binary)
    binary
  end

  def load(filename) do
    { status, binary } = File.read(filename)
    case status do
     :ok -> :erlang.binary_to_term(binary)
     :error -> "Arquivo Inexistente" 
    end
  end
end
