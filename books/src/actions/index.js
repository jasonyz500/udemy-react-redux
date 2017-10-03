export function selectBook(book) {
  // selectBook is an ActionCreator, needs to return an action, an object with a type property
  // action has type, payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}