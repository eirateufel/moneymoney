import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import SidebarSection from '../sidebar-section/sidebar-section';
import CalendarMonth from '../calendar-month/calendar-month';
import sidebarStyles from './sidebar.module.css';

const modal = document.getElementById('modal')

function Modal({open}) {
    if(!open) {
        return null
    }
    return ReactDOM.createPortal(<div className='' style={{position
    : 'absolute', top: '500px', left: '500px' }}><CalendarMonth month={4}></CalendarMonth></div>, modal)
}

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [isCheckedSection1, setIsCheckedSection1] = useState(true);
    const [isCheckedSection2, setIsCheckedSection2] = useState(false);
    const [isCheckedSection3, setIsCheckedSection3] = useState(false);
    const [isCheckedSection4, setIsCheckedSection4] = useState(false);


    const onClickSection1 = () => {
        setIsCheckedSection1(true);
        setIsCheckedSection2(false);
        setIsCheckedSection3(false);
        setIsCheckedSection4(false);
    }

    const onClickSection2 = () => {
        setIsCheckedSection1(false);
        setIsCheckedSection2(true);
        setIsCheckedSection3(false);
        setIsCheckedSection4(false);
    }

    const onClickSection3 = () => {
        setIsCheckedSection1(false);
        setIsCheckedSection2(false);
        setIsCheckedSection3(true);
        setIsCheckedSection4(false);
    }

    const onClickSection4 = () => {
        setIsCheckedSection1(false);
        setIsCheckedSection2(false);
        setIsCheckedSection3(false);
        setIsCheckedSection4(true);
    }

    const onClick = () => {
        setOpen(!open)
    }

    return (
        <div className={sidebarStyles.mainSection}>
            <SidebarSection sectionName="VIEW GRAPHS" url="/home" sectionNumber="1" checked={isCheckedSection1} onClick={onClickSection1}/>
            <SidebarSection sectionName="ENTER DATA" url="/calendar" sectionNumber="2" checked={isCheckedSection2} onClick={onClickSection2}/>
            <SidebarSection sectionName="CATEGORIES" url="/dashboard" sectionNumber="3" checked={isCheckedSection3} onClick={onClickSection3}/>
            <SidebarSection sectionName="EXPORT" url="/contacts" sectionNumber="4" checked={isCheckedSection4} onClick={onClickSection4}/>
            <button onClick={onClick}>Modal</button>
            <Modal open={open}/>
        </div> 
    )
}