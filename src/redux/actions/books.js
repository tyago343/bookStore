import { FETCH_BOOKS, FETCH_BOOK } from '../constants/books.js'

export const fetchBooks = books => ({
    type : FETCH_BOOKS,
    books
})
export const fetchBook = book => ({
    type : FETCH_BOOK,
    book
})