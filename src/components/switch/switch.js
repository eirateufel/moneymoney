import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import SidebarSection from '../sidebar-section/sidebar-section';
import Structure from '../structure/structure'
import switchStyles from './switch.module.css';

export default function Switch(props) {
    const [left, setLeft] = useState(true);
    const setSwitchState = props.setSwitchState;
    function onCLick() {
        setLeft(!left);
        setSwitchState(!left);
    }

    return (
        <div className={left ? switchStyles.mainSection_left : switchStyles.mainSection_right}>
            <div className={left ? switchStyles.circle_left : switchStyles.circle_right} onClick={onCLick}></div>
        </div> 
    )
}