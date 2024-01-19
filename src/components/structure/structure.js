import React from 'react';
//import StructureModule from '../structure-module/structure-module';
import StructureMainSection from '../structure-main-section/structure-main-section';
import StructureAddButton from '../structure-add-button/structure-add-button';
import StructureDeleteButton from '../structure-delete-button/structure-delete-button';
import structureStyles from './structure.module.css'

import {testData} from '../TESTDATA/data'

export default function Structure() {
    function renderLevel(levelData) {
        console.log("level data", levelData, levelData.children)
        const children = levelData.children ? Object.keys(levelData.children).map(key => renderLevel(levelData.children[key])) : false;
        const node = <>
            <div className={structureStyles[`level${levelData.level}`]}>
                {levelData.name.toUpperCase()}
                <div className={structureStyles.buttonContainer}>
                    {levelData.level < 5 ? <StructureAddButton></StructureAddButton> : <div className={structureStyles.button_placeholder}></div>}
                    <StructureDeleteButton></StructureDeleteButton>
                </div>
                {
                }
            </div>
            {children && children}
        </>
        return node;
    }

    const levels = Object.keys(testData).map(key => renderLevel(testData[key]))//renderLevel(testData[0])
    const l = renderLevel(testData[0]);

    return (
        <div className={structureStyles.mainSection}>
            <StructureMainSection mainSectionName="INCOME" children={l}></StructureMainSection>
            <StructureMainSection mainSectionName="OUTCOME" children={levels}></StructureMainSection>
        </div>
    )
}