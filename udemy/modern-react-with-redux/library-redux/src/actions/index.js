const SelectBook = function (book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

export {
  SelectBook
}
