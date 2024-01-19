import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import DiagramLineDotsDot from '../diagram-line-dots-dot/diagram-line-dots-dot';

export default function DiagramLineWithDots(props) {
    const scaleWidth = props.scaleWidth;
    const scaleHeight = props.scaleHeight;
    const firstGap = props.firstGap;
    const markHeigt = props.markHeigt;
    const textHeight = props.textHeight;
    const valueWidth = props.valueWidth
    const monthGap = (scaleWidth - valueWidth - firstGap * 2) / (props.months.length - 1);
    const valueGap = (scaleHeight - textHeight - markHeigt);
    const maxY = markHeigt;
    const minY = scaleHeight - textHeight - markHeigt * 2;
    const yDiff = minY - maxY;
    const oneInProportion = yDiff / (props.maxValue - props.minValue);
    const lines = [];
    const dots = [];
    const monthMarks = props.months.map((m, i) => {
        const month = props.data[m]; //TODO нихуя не понятно название
        const x = valueWidth + firstGap + i * monthGap;
        const y = minY - oneInProportion * (month - props.minValue);
        dots.push({x, y});
        if (i < props.months.length - 1) {
            const nextMonth = props.data[props.months[i + 1]];
            const nextX = valueWidth + firstGap + (i + 1) * monthGap;
            const nextY = minY - oneInProportion * (nextMonth - props.minValue);
            lines.push(<line x1={x} y1={y} x2={nextX} y2={nextY} stroke={props.color} stroke-width={1} />)
        }
        return <DiagramLineDotsDot x={x} y={y} color={props.color} value={month} />
        //return <circle cx={x} cy={y} r={5} fill={props.color} />
    })

    const downY = scaleHeight - textHeight - markHeigt / 2;
    let fillingLines = ``;
    dots.forEach(dot => fillingLines = fillingLines + `L${dot.x},${dot.y} `);
    fillingLines = fillingLines + `L${scaleWidth - firstGap},${downY} z`
    

    const filling = <path fill={props.fillColor} fill-opacity={0.3} d={`M${valueWidth + firstGap},${downY} ${fillingLines} z`} />

    return (
        <>
            {filling}
            {lines}
            {monthMarks}
        </>
    )
}
