import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import CalendarDay from '../calendar-day/calendar-day';
import calendarMonthStyles from './calendar-month.module.css';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function CalendarMonth(props) {
    const date = new Date();
    const isThisMonth = date.getMonth() === props.month && date.getFullYear() === props.year;
    const days = [];
    for (let i = 1; i <= getDaysInMonth(props.month, props.year); i++) days.push(i)
    const daysElements = [];
    for (let i = 1; i < getDayOfWeek(props.month, props.year); i++) daysElements.push(<CalendarDay key={`emptyday-${i}-${props.month}-${props.years}`} isEmpty={true}/>)
    daysElements.push(...days.map(day => <CalendarDay day={day} month={props.month} year={props.year} key={`day-${day}-${props.month}-${props.years}`}></CalendarDay>));
    return (
        <div className={isThisMonth ? calendarMonthStyles.wrapper_this : calendarMonthStyles.wrapper}>
            <div className={calendarMonthStyles.monthName}>{monthNames[props.month]}</div>
            <div className={calendarMonthStyles.mainSection}>
                {daysElements}
            </div>
        </div>
         
    )
}

function getDaysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function getDayOfWeek(month, year) {
    console.log("Month", month, new Date(year, month, 1).getDay());
    const num = new Date(year, month, 1).getDay();
    return num > 0 ? num : 7;
}