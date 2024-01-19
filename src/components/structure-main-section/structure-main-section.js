import React from 'react';
import mainSectioneStyles from './structure-main-section.module.css'

export default function StructureMainSection(props) {
    return (
        <div className={mainSectioneStyles.mainSection}>
            <div className={mainSectioneStyles.mainSectionHeader}>{props.mainSectionName}</div>

            <div className={mainSectioneStyles.childContainer}>{props.children}</div>
        </div>
    )
}