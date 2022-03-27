const DeleteEventModal = ({ onDelete, eventText, onClose }) => {

    return ( 
        <div>
            <div id="timed-deleteEventModal">
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