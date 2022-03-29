import { useState, useEffect } from 'react';
import AsArLogoLgWt from '../../components/all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component';
import CalendarHeader from '../../components/timed-components/calendar-header/calendar-header.component';
import DeleteEventModal from '../../components/timed-components/deleteEventModal/deleteEventModal.component';
import NewEventModal from '../../components/timed-components/newEventModal/newEventModal.component';
import TimedDay from '../../components/timed-components/timed-day/timed-day.component';
import { useDate } from '../../components/timed-components/timed-date-hook/timed-date-hook.component';

import { setToDoList } from '../../redux/todo/todo.actions.js';

import './timed.scss';
import { updatedEvents } from './time.utils';
import { connect } from 'react-redux';

const Timed = () => {

    const [nav, setNav] = useState(0);
    const [clicked, setClicked] = useState();
    const [events, setEvents] = useState(
        localStorage.getItem('events') ? 
        JSON.parse(localStorage.getItem('events')) : 
        []
    );

    console.log(events.map(item => item))


    const eventForDate = date => events.find(e => e.date === date);

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);
    
    const { days, dateDisplay } = useDate(events, nav);
 
    console.log(clicked)
    
    return ( 
        <div className='timed-body'>
            <div id="timed-container">
                <AsArLogoLgWt />
                <CalendarHeader
                    dateDisplay={dateDisplay}
                    onNext={() => setNav(nav + 1)}
                    onBack={() => setNav(nav - 1)} 
                />

                <div id="timed-weekdays">
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                    <div>Sunday</div>
                </div>

                <div id="timed-calendar">
                    {days.map((d, index) => (
                        <TimedDay
                            key={index}
                            day={d}
                            onClick={() => {
                                if (d.value !== 'timed-padding') {
                                    setClicked(d.date);
                                }
                            }} 
                        />
                    ))}
                </div>
            </div>

            {clicked && !eventForDate(clicked) &&
                <NewEventModal
                    onClose={() => setClicked(null)}
                    onSave={title => {
                        setEvents(updatedEvents(events, title, clicked));
                        setClicked(null);
                    }} 
                />
            }
            
            {clicked && eventForDate(clicked) &&
                <DeleteEventModal
                        eventText={eventForDate(clicked)}
                        onClose={() => setClicked(null)}
                        onDelete={() => {
                            setEvents(events.filter(e => e.date !== clicked));
                            setClicked(null);
                        }}
                        onSave={title => {
                            setEvents(updatedEvents(events, title, clicked));
                        }}
                />
            }
            
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    setToDoList: toDoList => dispatch(setToDoList(toDoList))
 })
 
export default connect(null, mapDispatchToProps)(Timed);