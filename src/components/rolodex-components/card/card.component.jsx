import React from "react";

import './card.style.css'

const Card = ({ character }) => (
    <div className="card-container">
        <img alt="character" src={`https://robohash.org/${character.id}?set=set5&&size=180x180`}/>
        <h3>{character.name}</h3>
        <p>{character.email}</p>
    </div>
);

export default Card;