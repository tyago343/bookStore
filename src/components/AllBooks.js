import React, { Component } from 'react'
import { getAllBooks } from '../redux/utils/bookFunctions.js'
import { connect } from 'react-redux';
class AllBooks extends Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        this.props.getAllBooks()
    }
    render(){
        const { books } = this.props
        console.log(books)
        return (
            <div>
                <ul>
                {books && books.map(book=>
                    <li><img src={book.image}/></li>
                )}
                </ul>
            </div>
        )
    }
}
const mapStateToProp = state => ({
    books : state.books
})
const mapDispatchToProp = dispatch => ({
    getAllBooks : () => dispatch(getAllBooks())
})
export default connect(mapStateToProp, mapDispatchToProp)(AllBooks)