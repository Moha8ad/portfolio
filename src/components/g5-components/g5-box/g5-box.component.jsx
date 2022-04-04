import { connect } from 'react-redux';

import { boxOne, boxTwo, boxThree, boxFour, boxFive, boxArchive } from '../../../redux/word/word.actions';

import WordsBox from '../g5-word-box/g5-word-box.component';

import './g5-box.styles.scss';

const G5Box = ({ wordsDayOne, boxOne, wordsDayTwo, boxTwo, wordsDayThree, boxThree, wordsDayFour, boxFour, wordsDayFive, boxFive, wordsArchive, boxArchive }) => {

    const boxes = [
        {
            title: 'box 1',
            boxName:  boxOne,
            db: wordsDayOne,
            nextBox: boxTwo
        }, 
        {
            title: 'box 2',
            boxName:  boxTwo,
            db: wordsDayTwo,
            nextBox: boxThree
        }, 
        {
            title: 'box 3',
            boxName:  boxThree,
            db: wordsDayThree,
            nextBox: boxFour
        }, 
        {
            title: 'box 4',
            boxName:  boxFour,
            db: wordsDayFour,
            nextBox: boxFive
        }, 
        {
            title: 'box 5',
            boxName:  boxFive,
            db: wordsDayFive,
            nextBox: boxArchive
        }
    ]

    return (
        <div className='g5-box'>
        {boxes.map((box, index) => 
            <div key={index} className='g5-card-box'>
                <div className='g5-box-header'>
                    {box.title}
                </div>                
                {box.db.map((card, key) => 
                    <WordsBox key={key} box={box} card={card} />
                )}
            </div>
        )}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    boxOne: word => dispatch(boxOne(word)),
    boxTwo: word => dispatch(boxTwo(word)),
    boxThree: word => dispatch(boxThree(word)),
    boxFour: word => dispatch(boxFour(word)),
    boxFive: word => dispatch(boxFive(word)),
    boxArchive: word => dispatch(boxArchive(word)),
});

const mapStateToProps = ({ word: {wordsDayOne, wordsDayTwo, wordsDayThree, wordsDayFour, wordsDayFive, wordsArchive} }) => ({
    wordsDayOne, wordsDayTwo, wordsDayThree, wordsDayFour, wordsDayFive, wordsArchive
});

export default connect(mapStateToProps, mapDispatchToProps)(G5Box);