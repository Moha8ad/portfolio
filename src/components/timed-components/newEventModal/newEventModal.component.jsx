import { useState } from "react";

const NewEventModal = ({ onSave, onClose }) => {

    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);

    return ( 
        <div>
            <div id="timed-newEventModal">
                <h3>New Event</h3>
                <input
                    className={error ? 'timed-error' : ''}
                    type="text"
                    id="timed-eventTitleInput"
                    placeholder="Event Title "
                    value={title}
                    onChange={e => setTitle(e.target.value)} />

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

                <button
                    className='timed-button'
                    id="timed-cancelButton"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
            <div id="timed-modalBackDrop"></div>
        </div>

    );
}
 
export default NewEventModal;