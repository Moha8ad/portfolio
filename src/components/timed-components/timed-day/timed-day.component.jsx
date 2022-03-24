const TimedDay = ({ day, onClick }) => {
    const timedClassName = `timed-day ${day.value === 'timed-padding' ? 'timed-padding' : ''} ${day.isCurrentDay ? 'timed-currentDay' : ''}`;

    return ( 
        <div 
          onClick={onClick}
          className={timedClassName}>
            {day.value === 'timed-padding' ? '' : day.value}

            {day.event && 
                <div className="timed-event">
                    {day.event.title}
                </div>
            }
        </div>
     );
}
 
export default TimedDay;