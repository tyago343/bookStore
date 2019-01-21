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
        return (
            <section className="row">
                {books && books.map(book=>
                    <div class="card col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{ margin: "1.5%"}} key={book.id}>
                    <i class="far fa-heart card-heart" style={{color: "#e7324d"}}></i>
                    <img src={book.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title-custom">"{book.title}"</h5>
                      <p class="card-text card-synapsis">{book.synopsis}</p>
                      <h6 className="card-author">{book.author}</h6>
                    </div>
                  </div>
                )}
            </section>
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