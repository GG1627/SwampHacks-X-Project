import React, { useState } from "react";
import "./HomeScreen.css";
import background from "../assets/XPbackground.jpg";
import Calendar from 'react-calendar';

const CalendarPage = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div style={{ backgroundImage: `url(${background})`, height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="window" style={{ width: '95vw', height: '95vh', margin: 'auto'}}>
                <div className="title-bar" style={{height: '30px'}}>
                    <div className="title-bar-text">Calendar</div>
                    <div className="title-bar-controls">
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                <Calendar onChange={onChange} value={value} />

                </div>
            </div>
        </div>
    );
};

export default CalendarPage;
