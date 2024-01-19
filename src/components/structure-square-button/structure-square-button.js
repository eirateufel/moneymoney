import React from 'react';
//import StructureModule from '../structure-module/structure-module';
import buttonStyles from './structure-square-button.module.css'

export default function StructureSquareButton(props) {
    return (
        <div className={buttonStyles.button} onClick={props.onClick}>{props.text}</div>
    )
}