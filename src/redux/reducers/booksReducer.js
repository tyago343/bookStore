import { FETCH_BOOKS } from '../constants/books.js'

export default function books (state = [], action) {
    switch (action.type){
        case FETCH_BOOKS:
            return action.books
        default:
            return state
    }
}