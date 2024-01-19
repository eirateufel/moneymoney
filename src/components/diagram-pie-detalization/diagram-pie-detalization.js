import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import DiagramPiePiece from '../diagram-pie-piece/diagram-pie-piece';
import diagramPieDetalizationStyles from './diagram-pie-detalization.module.css';

export default function DiagramPieDetalization(props) {
    const pieces = [];
    const totalPieces = props.pieces ? props.pieces.length : 0;
    if (props.pieces && totalPieces > 0) {
        const dotRadius = props.diagramSize / (12 * 3)/// (totalPieces * 3);
        const lineGap = dotRadius * 3;
        const upperGap = dotRadius / 2;
        const total = props.pieces.map(e => e.total).reduce((accumulator, currentValue) => accumulator + currentValue);

        for (let i=0; i < totalPieces; i++) {
            const piece = props.pieces[totalPieces - i - 1];
            const percentage = Math.round(piece.total / total * 100); 
            if (props.isHorizontal) {
                pieces.push(<circle cx={props.diagramSize + 50 + dotRadius + props.shift + props.border} cy={upperGap + dotRadius + lineGap * i + props.border} r={dotRadius} fill={piece.fillColor}/>)
                pieces.push(<text x={props.diagramSize + 50 + dotRadius * 2 + 20 + props.shift + props.border} y={upperGap + dotRadius + lineGap * i + props.border} font-weight="bold">{`${piece.name}, ${percentage}%`}</text>)
            }
        }
    } 
    return (
        <>
        {pieces}
        </>
    )
}
