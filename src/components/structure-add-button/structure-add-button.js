import React from 'react';
//import StructureModule from '../structure-module/structure-module';
import StructureSquareButton from '../structure-square-button/structure-square-button'
import buttonStyles from './structure-add-button.module.css'

export default function StructureAddButton() {
    return (
        <div className={buttonStyles.button}>
            <StructureSquareButton text="+" onClick={() => console.log("ADD")}></StructureSquareButton>
        </div>
    )
}