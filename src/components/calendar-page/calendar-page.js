import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import CalendarMonth from '../calendar-month/calendar-month';
import calendarPageStyles from './calendar-page.module.css';
const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export default function CalendarPage() {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [isNextYearButtonDisabled, setIsNextYearButtonDisabled] = useState(true);
    const monthsElements = months.map(month => <CalendarMonth month={month} year={year} key={`month-${month}-${year}`}/>)
    function goToPreviousYear() {
        setYear(year - 1);
        setIsNextYearButtonDisabled(false);
    }
    function goToNextYear() {
        setYear(year + 1);
        if (year + 1 === today.getFullYear()) setIsNextYearButtonDisabled(true)
    }
    return (
        <div className={calendarPageStyles.page}>
            <div className={calendarPageStyles.yearHeader}>
                <button className={calendarPageStyles.yearButton} onClick={goToPreviousYear}>&#9664;</button>
                <div className={calendarPageStyles.yearNum}>{year}</div>
                <button className={calendarPageStyles.yearButton} onClick={goToNextYear} disabled={isNextYearButtonDisabled}>&#9654;</button>
            </div>
            <div className={calendarPageStyles.months}>
                {monthsElements}
            </div>
            
        </div>
    )
}