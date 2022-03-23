import { checkTime } from '../g5-box/g5-box.utils';

import './g5-button-panel.styles.scss';

const ButtonPanel = ({ box, card }) => {

    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), (now.getDate() + 1));
    
    return ( 
        <div className='g5-buttons'>
        {checkTime(card.time) ?
            <div className='g5-conditional-btn'>
                <div className='g5-stay' onClick={() => box.boxName(card)}>
                    <i className="bi bi-arrow-repeat"></i>
                </div>
                <div className='g5-next' onClick={() => box.nextBox({ ...card, time: nextDay, review: false})}>
                    <i className="bi bi-check-lg"></i>
                </div>
            </div>
            :
            <div className='g5-conditional-btn'>
                <div className='g5-word-reviewed'>
                    <i className="bi bi-patch-check"></i>
                    <div className='g5-reviewed-info'>come back tommorow!</div>
                </div>
            </div>
        } 
        </div>
    );
}
 
export default ButtonPanel;
