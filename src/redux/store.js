import { createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers/index.js'

export default createStore(reducers)

