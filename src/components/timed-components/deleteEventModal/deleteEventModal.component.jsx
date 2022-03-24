const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
    return ( 
        <>
            <div id="timed-deleteEventModal">
                <h2>Event</h2>
                <p id="timed-eventText">{eventText}</p>
                <button onClick={onDelete} className='timed-button' id="timed-deleteButton">Delete</button>
                <button onClick={onClose} className='timed-button' id="timed-closeButton">Close</button>
            </div>
            <div id="timed-modalBackDrop"></div>
        </>
    );
}
 
export default DeleteEventModal;