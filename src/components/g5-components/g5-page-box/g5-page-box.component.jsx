import Navbar from "../g5-navbar/g5-navbar.component";
import WordsBox from "../g5-word-box/g5-word-box.component";

import './g5-page-box.styles.scss';

const PageBox = ({ box }) => {

    const wordsToReview = box.db.filter(card => card.review === false)
    const reviewedWords = box.db.filter(card => card.review === true)

    return ( 
        <div className={`${box.style} g5-page-box`}>
            <Navbar />
            <div className='g5-page-header'>
                {box.title}
            </div>
            <div className="g5-words-to-review">
                <div className="g5-review-header">
                    Words to be reviewed.
                </div>
                {wordsToReview.length > 0 ?
                    <div>
                        {wordsToReview.map((card, idx) =>  
                            <WordsBox key={idx} box={box} card={card} />    
                        )}
                    </div>
                :
                    <div className="g5-no-words"><i className="bi bi-check-all"></i></div>
            }
            </div>
            <div className="g5-words-to-practice">
                <div className="g5-review-header">
                    Words to be practice again tomorrow
                </div>
                {reviewedWords.length > 0 ?
                    <div>
                        {reviewedWords.map((card, key) =>  
                            <WordsBox key={key} box={box} card={card} />    
                        )}
                    </div>
                :
                    <div className="g5-no-words"><i className="bi bi-check-all"></i></div>
                }
            </div>
        </div>
    );
}
 
export default PageBox;