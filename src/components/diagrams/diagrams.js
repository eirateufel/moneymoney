import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import DiagramPie from '../diagram-pie/diagram-pie';
import diagramStyles from './diagrams.module.css';
import DiagramIncomeOutcome from '../diagram-income-outcome/diagram-income-outcome';
import {diagramData, outcome} from '../TESTDATA/data'

export default function Diagrams() {
    const scaleWidth = 800;
    const scaleHeight = 400;
    const firstGap = 20;
    const markHeigt = 20;
    const textHeight = 20;
    const valueWidth = 30;
    const currency = "Pounds";
    return (
        <div className={diagramStyles.mainSection}>
            <h1>Income and outcome per category</h1>
            <DiagramPie pieces={diagramData}
                name={"Total Income"}
                size={400}
                border={20}
                strokeColor={"white"}
            />
            <DiagramPie pieces={outcome}
                name={"Total Outcome"}
                size={400}
                border={20}
                strokeColor={"white"}
            />
            <h1>Total income and outcome</h1>
            <h2>Income and outcome</h2>
            <DiagramIncomeOutcome currency={currency} scaleWidth={scaleWidth} scaleHeight={scaleHeight} firstGap={firstGap} markHeigt={markHeigt} textHeight={textHeight} valueWidth={valueWidth} isNetIncome={false}/>
            <h2>Net income</h2>
            <DiagramIncomeOutcome currency={currency} scaleWidth={scaleWidth} scaleHeight={scaleHeight} firstGap={firstGap} markHeigt={markHeigt} textHeight={textHeight} valueWidth={valueWidth} isNetIncome={true}/>
        </div>
    )
}
