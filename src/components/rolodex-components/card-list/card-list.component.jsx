import React from "react";
import Card from '../card/card.component';
import './card-list.style.css';

const CardList = ({ characters }) => (
    <div className="card-list">
        {characters.map(character => 
            <Card key={character.id} character={character} /> 
        )}
    </div>
);

export default CardList;