import React, { Component } from 'react'
import { getBook } from '../redux/utils/bookFunctions.js'
import { connect } from 'react-redux';

class SingleBook extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchBook(1)
    }
    render(){
        const { book } = this.props
        return (
            <div style={{marginTop: '10px'}}>
                <div className='row'>
                    <section className='col-md-3 col-xs-12'>
                        <img className='img-fluid' src={book.image} alt="Book image"/>
                    </section>
                    <section className='col-md-9 col-xs-12'>
                        <h2 className='book-title'>"{book.title}"</h2>
                        <p className='book-synopsis'>Synopsis: {book.synopsis}</p>
                    </section>
                </div>
                <div className="row">
                    <section className='col-md-3 col-xs-12'>
                        <h3 className='book-author'>{book.author}</h3>
                        <h5 className='book-year'>Year published: {book.year}</h5>
                    </section>
                    <section className='col-md-9 col-xs-12'>
                        <a className='btn btn-default' href='http://www.google.com' disabled={!!book.linkToBuy} >LINK TO BUY</a>
                    </section>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    book : state.books
})
const mapDispatchToProps = dispatch => ({
    fetchBook : function(id){
        dispatch(getBook(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook)