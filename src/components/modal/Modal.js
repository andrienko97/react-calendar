import React from 'react';

import './Modal.css'

export class Modal extends React.Component {
    state = {
        value: '',
    }

    setValue(e) {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        const {
            onSaveClick,
            onCancelClick,
        } = this.props;
        return (
            <div className={'calendar-modal-wrapper'}>
                <div className={'calendar-modal'}>
                <input
                type="text"
                value={this.state.value}
                onChange={e => this.setValue(e)}
                className={'calendar-modal-input'}
                placeholder={'Add task name'}
                />
                <button className={'calendar-modal-save'} onClick={() => onSaveClick(this.state.value)}>Save</button>
                <button className={'calendar-modal-cancel'} onClick={onCancelClick}>Cancel</button> 
            </div>
            </div>
        )
    }
    
}