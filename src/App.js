import React from 'react';

import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import { Modal } from './components/modal/Modal';
import './App.css';

const MonthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

export class App extends React.Component {

  state = {
    index: 0,
    name: '', // June - 2019
    months: {
      // June - 2019: [1,2,3,4,5....],
      // July - 2019: [1,2,3,4,5....],
    },
    isModalShown: false
  }

  componentDidMount() {
    const name = this.getMonthName();
    const months = {
      [name]: this.getMonthDates(this.state.index)
    }
    this.setState(
      {
        ...this.state,
        name,
        months
      }
    )
  }

  getDate(plusMonth = 0, date = 1) {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+plusMonth, date);
  }

  getMonthName(plusMonth = 0) {
    const date = this.getDate(plusMonth)
    return `${MonthNames[date.getMonth()]} - ${date.getFullYear()}`
  }

  getMonthDates(plusMonth) {
    const date = this.getDate(plusMonth+1, 0);
    const lastDay = date.getDate();
    const days = [];

    for (let i = 1; i <= lastDay; i++) {
      days.push(i);
    }

    return days;
  }

  getNextMonth(newIndex) {
    const { months } = this.state;

    const mewName = this.getMonthName(newIndex)

    const month = months[mewName] || this.getMonthDates(newIndex)

    this.setState({
      ...this.state,
      index: newIndex,
      name: mewName,
      months: {
        ...months,
        [mewName]: month
      }
    });
  }

  handleModal(isShow, text) {
    this.setState(
      {
        ...this.state,

        isModalShown: !!isShow,
      }
    )
  }

  render() {
    const {
      name,
      months,
      index
    } = this.state
    return (
      <div className="calendar-wrapper">
        <Header
          name={name}
          clickNext={() => this.getNextMonth(index + 1)}
          clickPrev={() => this.getNextMonth(index - 1)}
          clickActual={() => this.getNextMonth(0)}
        />
        <Body
          itemClick={(item => this.handleModal(true))}
          items={months[name]}
        />
        {
          this.state.isModalShown && (
            <Modal
            onSaveClick={text => this.handleModal(false, text)}
            onCancelClick={() => this.handleModal(false)}
          />
          )
        }
      </div>
    );
  }
}
