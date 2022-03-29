import { connect } from "react-redux";

const TimedDay = ({ day, onClick }) => {
    const timedClassName = `timed-day ${day.value === 'timed-padding' ? 'timed-padding' : ''} ${day.isCurrentDay ? 'timed-currentDay' : ''}`;

    return ( 
        <div 
          onClick={onClick}
          className={timedClassName}>
            {day.value === 'timed-padding' ? '' : day.value}

            {day.event && 
                <div className="timed-event">
                    {day.event.titles.map((item, key) => 
                        <div key={key}>
                            {item}
                        </div>
                    )}
                </div>
            }    
        </div>
     );
}

const mapStateToProps = ({ toDoList: { toDoListDB }}) => ({
    toDoListDB
})
 
export default connect(mapStateToProps, null)(TimedDay);