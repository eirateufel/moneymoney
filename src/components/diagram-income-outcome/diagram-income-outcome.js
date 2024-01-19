import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import DiagramScale from '../diagram-scale/diagram-scale';
import DiagramLineWithDots from '../diagram-line-with-dots/diagram-line-with-dots';
import DiagramLineDotsDetalization from '../diagram-line-dots-detalization/diagram-line-dots-detalization';

import { diagramData, diagramData2, diagramData3, outcome, outcome2, outcome3 } from '../TESTDATA/data';

const colors3 = [
    "#9DD861",
    "#D3F2C9",
    "#A6CFB2",
    "#3C754C",
    "#153A46",
    "#22809D",
    "#798CD2",
    "#BDCAF9",
    "#DDDAEF",
    "#F9E09F",
    "#F4C448",
    "#F48648"
]

const incomeColor = colors3[3];
const incomeFillColor = colors3[0];
const outcomeColor = colors3[5];
const outcomeFillColor = colors3[7];
const netIncomeColor = colors3[11]
const netIncomeFillColor = colors3[9]

export default function DiagramIncomeOutcome(props) {
    const months = ["05.2023", "06.2023", "07.2023"];
    const incomeData = {
        "05.2023": diagramData, "06.2023": diagramData2, "07.2023": diagramData3
    };
    const outcomeData = {
        "05.2023": outcome, "06.2023": outcome2, "07.2023": outcome3
    }
    const scaleWidth = props.scaleWidth;
    const scaleHeight = props.scaleHeight;
    const firstGap = props.firstGap;
    const markHeigt = props.markHeigt;
    const textHeight = props.textHeight;
    const valueWidth = props.valueWidth;
    const incomeTotals = calcTotals(incomeData)//(props.income);
    const outcomeTotals = calcTotals(outcomeData)//(props.outcome);
    const netIncomeTotals = findNetIncome(incomeTotals, outcomeTotals);
    const allValues = Object.values(incomeTotals).concat(Object.values(outcomeTotals));
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);
    const averageIncome = findAverageValue(Object.values(incomeTotals));
    const averageOutcome = findAverageValue(Object.values(outcomeTotals));
    const averageNetIncome = findAverageValue(Object.values(netIncomeTotals));
    const detalizationData = [];
    if (!props.isNetIncome) {
        detalizationData.push({
            color: incomeColor,
            fillColor: incomeFillColor,
            name: "Income",
            currency: props.currency,
            value: averageIncome
        })
        detalizationData.push({
            color: outcomeColor,
            fillColor: outcomeFillColor,
            name: "Outcome",
            currency: props.currency,
            value: averageOutcome
        })
    } else {
        detalizationData.push({
            color: netIncomeColor,
            fillColor: netIncomeFillColor,
            name: "Net income",
            currency: props.currency,
            value: averageNetIncome
        })
    }
    

    return (
        <div>
            <svg width={1600} height={400}>
                <DiagramScale months={months} scaleWidth={scaleWidth} scaleHeight={scaleHeight} firstGap={firstGap} markHeigt={markHeigt} textHeight={textHeight} valueWidth={valueWidth} />
                {!props.isNetIncome &&
                    <>
                        <DiagramLineWithDots data={incomeTotals} months={months} scaleWidth={scaleWidth} scaleHeight={scaleHeight} firstGap={firstGap} markHeigt={markHeigt} textHeight={textHeight} valueWidth={valueWidth} minValue={minValue} maxValue={maxValue} color={incomeColor} fillColor={incomeFillColor} />
                        <DiagramLineWithDots data={outcomeTotals} months={months} scaleWidth={scaleWidth} scaleHeight={scaleHeight} firstGap={firstGap} markHeigt={markHeigt} textHeight={textHeight} valueWidth={valueWidth} minValue={minValue} maxValue={maxValue} color={outcomeColor} fillColor={outcomeFillColor} />
                        <DiagramLineDotsDetalization pieces={detalizationData} isHorizontal={true} diagramSize={props.scaleWidth} shift={0} />
                    </>
                }
                {props.isNetIncome &&
                    <>
                        <DiagramLineWithDots data={netIncomeTotals} months={months} scaleWidth={scaleWidth} scaleHeight={scaleHeight} firstGap={firstGap} markHeigt={markHeigt} textHeight={textHeight} valueWidth={valueWidth} minValue={minValue} maxValue={maxValue} color={netIncomeColor} fillColor={netIncomeFillColor} />
                        <DiagramLineDotsDetalization pieces={detalizationData} isHorizontal={true} diagramSize={props.scaleWidth} shift={0} />
                    </>
                }
            </svg>
        </div>
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

function findNetIncome(income, outcome) {
    const netIncome = {};
    Object.keys(income).forEach(key => netIncome[key] = income[key] - outcome[key])
    return netIncome;
}

function findAverageValue(data) {
    const sum = data.reduce((accum, val) => accum + val);
    return Math.round(sum / data.length);
}