import ButtonPanel from '../g5-button-panel/g5-button-panel.component';
import { highlight } from './g5-word-box.utils';

import './g5-word-box.styles.scss';

const WordsBox = ({ box, card }) => {
    return ( 
        <div className='g5-word-card'>
            <div className='g5-delete' onClick={() => box.boxName({...card, remove: true})}>
                <i className="bi bi-x"></i>
            </div>
            <div className='g5-word'>
                {card.word}
                <div className='g5-meaning'>{card.meaning}</div>
                <div className='g5-example'>{highlight(card.example, card.word)}</div>  
            </div>
            <ButtonPanel box={box} card={card} />
        </div>
    );
}
 
export default WordsBox;