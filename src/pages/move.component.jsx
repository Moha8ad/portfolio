import { preventOverflow } from '@popperjs/core';
import React from 'react';

class Liked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    card: 'CARD ONE'
                },
                {
                    card: 'CARD TWO'
                },
                {
                    card: 'CARD THREE'
                }
            ],
            likedCards: [],
            email: '',
            password: ''
        }
    }

    handleLikedCards = () => {
        const card = this.state.cards.map(card => card)
        this.setState({
            likedCards: [this.state.likedCards + card[0]]
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: '',
        })
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {

        return(
            <div class="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center bg-dark text-light p-4">
                        <div>
                            {this.state.cards.map((card, id) => 
                                <div key={id} class="bg-primary text-center p-4 m-4" onClick={this.handleLikedCards}>{card.card}{id}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-12 bg-success text-light p-4">
                        <div className="col-12 fs-2">Liked Cards:</div>
                        <div className="col12">
                            {this.state.likedCards}
                        </div>
                        <form onSubmit= {this.handleSubmit}>
                            <input 
                                name= 'email'
                                type= 'email'
                                value= {this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                            <label>
                                Email
                            </label>
                        </form>
                        <form onSubmit= {this.handleSubmit}>
                        <input 
                            name= 'password'
                            type= 'password'
                            value= {this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                        <label>
                            Password
                        </label>
                    </form>
                    <h1>{this.state.email}</h1>
                    <h1>{this.state.password}</h1>
                    <button onClick={this.handleSubmit}></button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Liked;