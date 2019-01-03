import { FETCH_BOOKS } from '../constants/books.js'

export const fetchBooks = books => ({
    type : FETCH_BOOKS,
    books
})