import React from 'react';
//import StructureModule from '../structure-module/structure-module';
import StructureSquareButton from '../structure-square-button/structure-square-button'
import buttonStyles from './structure-delete-button.module.css'

export default function StructureDeleteButton() {
    return (
        <div className={buttonStyles.button}>
            <StructureSquareButton text="×" onClick={() => console.log("DELETE")}></StructureSquareButton>
        </div>
    )
}