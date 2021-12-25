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
            likedCards: []
        }
    }

    handleLikedCards = () => {
        const card = this.state.cards.map(card => card)
        this.setState({
            likedCards: [this.state.likedCards + card[0]]
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
                    </div>
                </div>
            </div>
        )
    }

}

export default Liked;