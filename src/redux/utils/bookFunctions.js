import axios from 'axios'
import { manageError } from '../actions/index.js'
import { fetchBooks } from '../actions/books.js'

export const getAllBooks = () => dispatch => {
    axios.get('/api/book/')
    .then(({data})=>dispatch(fetchBooks(data)))
    .catch(error=>dispatch(manageError(error)))
}
