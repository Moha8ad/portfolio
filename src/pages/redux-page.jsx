import React from 'react';
import { connect } from 'react-redux'

import { addMessage } from '../redux/action-creator-add.js';

import QuotifyNavbar from '../components/quotify-components/qt-navbar/qt-navbar.component'

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state    
    }
}

class Presentational extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.submitNewMessage(this.state.input);
        this.setState({
            input: ''
        })
    }

    render(){
        return(
            <div class="row">   
                <QuotifyNavbar />
                <div class='col-8 p-5 m-5 bg-primary text-light fs-3'> 
                    <input value={this.state.input} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>add message</button>
                    <ul>
                        {this.props.messages.map((message, idx) => { return (
                            <li key={idx}>{message}</li>
                        )})}
                    </ul>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Presentational)