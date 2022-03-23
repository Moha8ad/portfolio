import React, { useState } from 'react';

import { connect } from 'react-redux';

import { boxOne } from '../../../redux/word/word.actions';

import './g5-add-new-word.styles.scss';

const AddNewWord = ({ boxOne }) => {
    const [input, setInput] = useState({id: '', word: '', meaning: '', example: '', time: 0, review: false});
    const [cardId, setCardId] = useState(Date.now())

    const handleChange = event => {
        const { name, value } = event.target;
       
        setInput({
            ...input, 
            [name]: value,
        });
    };

    const handleSubmit = () => {

        const now = new Date();
        const nextDay = new Date(now.getFullYear(), now.getMonth(), (now.getDate() + 1));
        
        setCardId(Date.now())
        boxOne({...input, time: nextDay, id: cardId, review: false})
        setInput({id: '', word: '', meaning: '', example: ''})
    };

    return ( 
        <div className='g5-add-new-word'>
            <div className='g5-form'>
                <input 
                    className='g5-custom-input'
                    type='text'
                    name='word'
                    value={input.word}
                    placeholder='Enter the Word'
                    onChange={handleChange}
                />
                <input 
                    className='g5-custom-input'
                    type='text'
                    name='meaning'
                    value={input.meaning}
                    placeholder='Enter the Meanig'
                    onChange={handleChange}
                />
                <input 
                    className='g5-custom-input'
                    type='text'
                    name='example'
                    value={input.example}
                    placeholder='Enter an Example'
                    onChange={handleChange}
                />
                <div className='g5-custom-btn' onClick={handleSubmit}>
                    Add
                </div>
            </div>
            <div className='g5-form-info'>
                Add a new word! Come back tomorrow and go one step forward!
            </div>
        </div>
     );
}
 
const mapDispatchToProps = dispatch => ({
    boxOne: word => dispatch(boxOne(word)),
});

export default connect(null, mapDispatchToProps)(AddNewWord);