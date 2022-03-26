const TimedDay = ({ day, onClick }) => {
    const timedClassName = `timed-day ${day.value === 'timed-padding' ? 'timed-padding' : ''} ${day.isCurrentDay ? 'timed-currentDay' : ''}`;

    return ( 
        <div 
          onClick={onClick}
          className={timedClassName}>
            {day.value === 'timed-padding' ? '' : day.value}

            {day.event && 
                <div className="timed-event">
                    {day.event.titles.map(item => 
                        <div>
                            {item}
                        </div>
                    )}
                </div>
            }    
        </div>
     );
}
 
export default TimedDay;