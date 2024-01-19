import React, {useState} from 'react';
import ReactDOM from 'react-dom';

export default function DiagramLineDotsDot(props) {
    const [isShown, setIsShown] = useState(true);
    const dotRadius = 5;
    const valueULHeight = 25;
    const valueULHalfWidth = props.value < 1000 ? 20 : calcWidth(props.value);

    const calcWidth = (value) => {

    }

    const dot = <circle cx={props.x} cy={props.y} r={dotRadius} fill={props.color} />
    const value = <>
        <path fill={"white"} fill-opacity={1} stroke={"black"} stroke-opacity={0.2} d={`M${props.x},${props.y - dotRadius - 5} L${props.x - valueULHalfWidth},${props.y - dotRadius - 5 - 7} L${props.x - valueULHalfWidth},${props.y - dotRadius - 5 - 7 - valueULHeight} L${props.x + valueULHalfWidth},${props.y - dotRadius - 5 - 7 - valueULHeight} L${props.x + valueULHalfWidth},${props.y - dotRadius - 5 - 7} z`} />
        <text x={props.x - valueULHalfWidth + 7} y={props.y - dotRadius - 5 - 10}>{props.value}</text>
    </>
    return (
        <>
        {dot}
        {isShown && value}
        </>
    )
}
