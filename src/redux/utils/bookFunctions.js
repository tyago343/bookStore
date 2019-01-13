import axios from 'axios'
import { manageError } from '../actions/index.js'
import { fetchBooks, fetchBook } from '../actions/books.js'

export const getAllBooks = () => dispatch => {
    axios.get('/api/book/')
    .then(({data})=>dispatch(fetchBooks(data)))
    .catch(error=>dispatch(manageError(error)))
}
export const getBook = id => dispatch => {
    axios.get(`/api/book/${id}`)
    .then(({data})=>dispatch(fetchBook(data)))
    .catch(error=>dispatch(manageError(error)))
}