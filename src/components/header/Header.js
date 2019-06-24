import React from 'react';

import './Header.css'

export class Header extends React.Component {
    render() {

    const {
        name,
        clickNext,
        clickPrev,
        clickActual,
    } = this.props;

        return (
            <div className="calendar-header">
                <div className="calendar-header-month">{name}</div>
                <div className="calendar-header-buttons">
                    <button className="calendar-header-prev" onClick={clickPrev}>❮</button>
                    <button className="calendar-header-next" onClick={clickNext}>❯</button>
                    <button className="calendar-header-actual" onClick={clickActual}>Actual</button>
                </div>
            </div>
        );
    }
}