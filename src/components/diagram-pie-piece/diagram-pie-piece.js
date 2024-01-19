import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import CalendarDay from '../calendar-day/calendar-day';
import DiagramPie from '../diagram-pie/diagram-pie';
import diagramPiePieceStyles from './diagram-pie-piece.module.css';

export default function DiagramPiePiece(props) {
    const [fullPiece, setFullPiece] = useState([])
    const border = props.border;
    const center = props.size / 2;
    const startX = Math.cos(props.startPercent * 2 * Math.PI + Math.PI / 2) * center + center + props.shift + border;
    const startY = center - Math.sin(props.startPercent * 2 * Math.PI + Math.PI / 2) * center + border;
    const endX = Math.cos(props.endPercent * 2 * Math.PI + Math.PI / 2) * center + center + props.shift + border;
    const endY = center - Math.sin(props.endPercent * 2 * Math.PI + Math.PI / 2) * center + border;
    const isBig = props.endPercent - props.startPercent > 0.5 ? 1 : 0;

    /*useEffect(() => {
        if (props.outer) return;
        setTimeout(() => {
            setFullPiece(<path stroke={props.strokeColor ? props.strokeColor : "white"} stroke-width={props.strokeWidth ? props.strokeWidth : "1"} fill={props.fillColor ? props.fillColor : "transparent"} d={`M${center + props.shift + border},${center + border} L${startX},${startY} A${center},${center} 0 ${isBig},0 ${endX},${endY} z`} onClick={onClick}/>);
            const newspaperSpinning = [
                {opacity: 0.5},
                {opacity: 1}
            ];
            const newspaperTiming = {
                duration: 2000,
                iterations: 1,
            };
            fullPiece.animate(newspaperSpinning, newspaperTiming);
            
        }, props.i * 50);
        
        //Runs only on the first render
    }, []);*/
    //console.log("Function", props.onClick)

    const onClick = (e) => {
        console.log("cliiiick")
        const target = e.target;
        console.log("target", target)
        const newspaperSpinning = [
            //{ transform: "rotate(0) scale(1)" },
            //{ transform: "rotate(360deg) scale(0)" },
            {opacity: 0.5},
            {opacity: 1}
        ];
        const newspaperTiming = {
            duration: 2000,
            iterations: 1,
        };
        //target.animate(newspaperSpinning, newspaperTiming);
        const dotRadius = props.size / (12 * 3)/// (totalPieces * 3);
        const lineGap = dotRadius * 3;
        const upperGap = dotRadius / 2;
                
        props.onClick(dotRadius, upperGap, lineGap, props.totalPieces, props.i, props.shift, props.startPercent, props.endPercent, props.fillColor, props.details);
    }
    
    return (
        <>
            {
                props.outer ?
                <path stroke={props.strokeColor ? props.strokeColor : "white"} stroke-width={props.strokeWidth ? props.strokeWidth : "1"} stroke-opacity={0.5} fill={props.fillColor ? props.fillColor : "transparent"} d={`M${startX},${startY} A${center},${center} 0 ${isBig},0 ${endX},${endY} `} /> 
                :
                <path stroke={props.strokeColor ? props.strokeColor : "white"} stroke-width={props.strokeWidth ? props.strokeWidth : "1"} fill={props.fillColor ? props.fillColor : "transparent"} d={`M${center + props.shift + border},${center + border} L${startX},${startY} A${center},${center} 0 ${isBig},0 ${endX},${endY} z`} onClick={onClick}/>
                //fullPiece
            }
        </>
        
    )
}
