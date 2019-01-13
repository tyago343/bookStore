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
            <div>
                {book && book.image}
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