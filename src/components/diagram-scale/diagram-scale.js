import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const monthsNames = {
    "01": "January",
    "02": "February", 
    "03": "March",
    "04": "April",
    "05": "May",
    "06": ""
}

export default function DiagramScale(props) {
    //const incomeByMonth = calcTotals(props.income);
    //const outcomeByMonth = calcTotals(props.outcome);

    const scaleWidth = props.scaleWidth;
    const scaleHeight = props.scaleHeight;
    const firstGap = props.firstGap;
    const markHeigt = props.markHeigt;
    const textHeight = props.textHeight;
    const valueWidth = props.valueWidth;
    const monthGap = (scaleWidth - valueWidth - firstGap * 2) / (props.months.length - 1);
    const monthMarks = props.months.map((m, i) => {
        const x = valueWidth + firstGap + i * monthGap;
        return <line x1={x} y1={scaleHeight - textHeight} x2={x} y2={scaleHeight - textHeight - markHeigt} stroke="black" stroke-width={1}/>
    })

    const outline = [
        <line x1={valueWidth} y1={0} x2={valueWidth} y2={scaleHeight - textHeight - markHeigt / 2} stroke="black" stroke-width={1} />,
        <line x1={valueWidth} y1={scaleHeight - textHeight - markHeigt / 2} x2={scaleWidth} y2={scaleHeight - textHeight - markHeigt / 2} stroke="black" strokeWidth={1} />
    ];
        
    return (
        <>
            {outline}
            {monthMarks}
        </>
    )
}

function calcTotals(data) {
    const months = Object.keys(data);
    const totalByMonth = {};
    months.forEach(m => {
        const month = data[m];
        const total = month.map(info => info.total).reduce((accum, val) => accum + val);
        totalByMonth[m] = total;
    })
    return totalByMonth;
}