import { FETCH_BOOKS, FETCH_BOOK } from '../constants/books.js'

export default function books (state = [], action) {
    switch (action.type){
        case FETCH_BOOKS:
            return action.books
        case FETCH_BOOK:
            return action.book
        default:
            return state
    }
}