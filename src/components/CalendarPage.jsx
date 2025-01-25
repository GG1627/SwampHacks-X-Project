import React, { useState } from "react";
import "./CalendarPage.css";
import background from "../assets/XPbackground.jpg";
import Calendar from 'react-calendar';
import { useNavigate } from "react-router-dom";


const CalendarPage = () => {
    const [value, onChange] = useState(new Date());
    
    const handleButtonCLick = () => {
        navigate("/");
    };

    const navigate = useNavigate();

    return (
        <div style={{ backgroundImage: `url(${background})`, height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="window" style={{ width: '95vw', height: '95vh', margin: 'auto'}}>
                <div className="title-bar" style={{height: '30px'}}>
                    <div className="title-bar-text">Calendar</div>
                    <div className="title-bar-controls">
                        <button aria-label="Close" onClick={handleButtonCLick}></button>
                    </div>
                </div>
                <div className="window-body" style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <h1>Calendar</h1>
                    <h2>View your progress over time!</h2>
                    <Calendar onChange={onChange} value={value}/>
                    <p style={{marginTop: '35px', color: 'red'}}><i>click the red x to go back home</i></p>
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;
