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
            password: '',
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

    changeText1 = () => {

        var node = document.getElementById("player1")
        var list = document.getElementById("test");
        list.insertBefore(node, list.childNodes[1]);
    }
    changeText2 = () => {
        var node = document.getElementById("player2")
        var list = document.getElementById("test");
        list.insertBefore(node, list.childNodes[1]);
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
                    <button class='col-1 bg-primary text-light m-5' onClick={this.changeText1}>player 1</button>
                    <button class='col-1 bg-primary text-light m-5' onClick={this.changeText2}>player 2</button>

                    
                    <div class="col-1 p-1" id="player1"><i class="bi bi-circle-fill text-warning fs-6"></i></div>
                    <div class="col-1 p-1" id="player2"><i class="bi bi-circle-fill text-danger fs-6"></i></div>

                    
                    <div class="bg-dark text-light col-12 d-flex justify-content-center  border-light flex-wrap">
                        <div id='test' class="container p-2">
                            <div className="p-1" id="1">1</div>
                            <div className="p-1" id="2">2</div>
                            <div className="p-1" id="3">3</div>
                            <div className="p-1" id="4">4</div>
                            <div className="p-1" id="5">5</div>
                            <div className="p-1" id="6">6</div>
                            <div className="p-1" id="7">7</div>
                            <div className="p-1" id="8">8</div>
                            <div className="p-1" id="9">9</div>
                            <div className="p-1" id="10">10</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Liked;