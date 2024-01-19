import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import sidebarSectionStyles from './sidebar-section.module.css';

export default function SidebarSection(props) {
    return (
        <Link to={props.url} className={sidebarSectionStyles.link}>
            <div className={props.checked ? sidebarSectionStyles.mainSectionChecked : sidebarSectionStyles.mainSectionUnchecked} onClick={props.onClick} id={`sidebarsection_${props.sectionNumber}`}>
                {props.sectionName}
            </div>
        </Link>
    )
}