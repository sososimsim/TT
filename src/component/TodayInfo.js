import React, { Component } from 'react';
import '../styles/TodayInfo.css';

const DAY = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

class TodayInfo extends Component {

  _getMonthString(){
    return (new Date().getMonth() + 1) + "월";
  }

  _getDateString(){
    return new Date().getDate() + "일";
  }

  _getDayString(){
    const now = new Date();
    const dayIndex = now.getDay() - 1;
    return DAY[dayIndex];
  }

  render(){
    return(
      <section id="today-info">
        <h2 className="today-date">오늘은<br/>
        <b>{this._getMonthString()} {this._getDateString()}</b><br/>
        <b>{this._getDayString()}</b>입니다
        </h2>
      </section>
    );
  }
}

export default TodayInfo;
