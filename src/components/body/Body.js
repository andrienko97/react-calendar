import React from 'react';

export class Body extends React.Component {
    render() {
        const { items, itemClick } = this.props;
        return (
            <div className="calendar-body">
                {
                    items && items.map((item, index) => {
                        return <span
                        key={index}
                        className="calendar-item"
                        onClick={() => {itemClick(item)}}>
                        {item}
                        </span>
                    })
                }

            </div>
        );
    }
}