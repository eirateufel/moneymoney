import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import Modal from '../modal/modal';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Link} from 'react-router-dom';
import calendarDayStyles from './calendar-day.module.css';
const modal = document.getElementById('modal')

export default function CalendarDay(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const today = new Date();
    const isToday = !props.isEmpty && today.getDate() === props.day && today.getMonth() === props.month && today.getFullYear() === props.year;
    const className = props.isEmpty ? calendarDayStyles.empty : (isToday ? calendarDayStyles.today : calendarDayStyles.day);
    
    function onClick() {
        if (props.isEmpty) return;
        console.log("Click day", props.day);
        setIsModalOpen(true);
    }

    function unmountModal() {
        setIsModalOpen(false);
    }
    /*if (!props.isEmpty) return (
        <Link to="/add">
            <div className={className} onClick={onClick}>
                {props.day}
                {
                    //<Modal open={isModalOpen}/>
                }
            </div> 
        </Link>
    )*/
    return (
        <div className={className} onClick={onClick}>
            {!props.isEmpty && props.day}
            {
                isModalOpen && <Modal open={isModalOpen} unmountModal={unmountModal} day={props.day} month={props.month} year={props.year}/>
            }
        </div> 
    )
}

function Contacts() {
    return (
      <div>
        <h2></h2>
      </div>
    );
  }