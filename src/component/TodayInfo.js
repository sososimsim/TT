import React, { Component } from 'react';
import '../styles/TodayInfo.css';

class TodayInfo extends Component {
  render(){
    return(
      <section id="today-info">
        <h2 className="today-date">오늘은<br/><b>8월 7일</b><br/><b>월요일</b>입니다</h2>
      </section>
    );
  }
}

export default TodayInfo;
