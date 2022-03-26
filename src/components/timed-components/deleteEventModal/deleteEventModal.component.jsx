const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
    return ( 
        <div>
            <div id="timed-deleteEventModal">
                <h6><i>Your Event for Today</i></h6>
                <p id="timed-eventText">
                {eventText.titles.map(item => 
                    <ul>
                        <li>{item.title}</li>
                    </ul>
                )}
                
                </p>
                <button onClick={onDelete} className='timed-button' id="timed-deleteButton">Delete</button>
                <button onClick={onClose} className='timed-button' id="timed-closeButton">Close</button>
            </div>
            <div id="timed-modalBackDrop"></div>
        </div>
    );
}
 
export default DeleteEventModal;