import React, { useState } from "react";
import "./CalendarPage.css";

const CalendarTile = () => {
      const [activeTab, setActiveTab] = useState('Mood');
    
    return (
        <div className="window" style={{ width: "300px" }}>
            <div className="title-bar">
                <div className="title-bar-text">Day Month Year</div>
                <div className="title-bar-controls">
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body">
                <section className="tabs" style={{ maxWidth: "500px" }}>
                    <menu role="tablist" aria-label="Sample Tabs">
                        <button role="tab" aria-selected="true" aria-controls="mood">Mood</button>
                        <button role="tab" aria-controls="tab-B">Logbook</button>
                        <button role="tab" aria-controls="tab-C">Tasks</button>
                    </menu>
                    <article role="tabpanel" id="mood">
                        <h3>Day's Mood</h3>
                        <progress value="50" max="100" style={{width: '100%', marginBottom: '15px'}}></progress>
                    </article>
                    <article role="tabpanel" hidden id="logbook">
                        <h3>Logbook</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolores iste molestiae illo ex voluptatum accusamus asperiores inventore pariatur officia, expedita aut necessitatibus quos quam quas, tempora quia magnam rerum.</p>
                        <fieldset>
                            <legend>Today's mood</legend>
                            <div className="field-row">
                                <input id="radio10" type="radio" name="fieldset-example2"></input>
                                <label htmlFor="radio10">Claire Saffitz</label>
                            </div>
                            <div className="field-row">
                                <input id="radio11" type="radio" name="fieldset-example2"></input>
                                <label htmlFor="radio11">Brad Leone</label>
                            </div>
                            <div className="field-row">
                                <input id="radio12" type="radio" name="fieldset-example2"></input>
                                <label htmlFor="radio12">Chris Morocco</label>
                            </div>
                            <div className="field-row">
                                <input id="radio13" type="radio" name="fieldset-example2"></input>
                                <label htmlFor="radio13">Carla Lalli Music</label>
                            </div>
                        </fieldset>
                    </article>
                    <article role="tabpanel" hidden id="tab-C">
                        <h3>Tab 3</h3>
                        <p>Lorem Ipsum Dolor Sit</p>
                    </article>
                </section>
            </div>
        </div>
    );
}

export default CalendarTile;
