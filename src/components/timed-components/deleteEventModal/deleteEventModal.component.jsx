import { useState } from "react";

const DeleteEventModal = ({ onSave, onDelete, eventText, onClose }) => {

    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);

    return ( 
        <div>
            <div id="timed-deleteEventModal">
            <h3>New Event</h3>
                <input
                    className={error ? 'timed-error' : ''}
                    type="text"
                    id="timed-eventTitleInput"
                    placeholder="Event Title "
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                />
                <button
                    className='timed-button'
                    id="timed-saveButton"
                    onClick={() => {
                        if (title) {
                            setError(false);
                            onSave(title);
                        } else {
                            setError(true);
                        }
                    } }
                >
                    Save
                </button>
                <h2>--------------</h2>
                <h6><i>Your Event for Today</i></h6>
                <ol id="timed-eventText">
                {eventText.titles.map(item => 
                    <li>
                        {item}
                        <i className="bi bi-check"></i> 
                        <i className="bi bi-x"></i>
                    </li>
                )}
                
                </ol>
                <button onClick={onDelete} className='timed-button' id="timed-deleteButton">Delete All</button>
                <button onClick={onClose} className='timed-button' id="timed-closeButton">Close</button>
            </div>
            <div id="timed-modalBackDrop"></div>
        </div>
    );
}
 
export default DeleteEventModal;