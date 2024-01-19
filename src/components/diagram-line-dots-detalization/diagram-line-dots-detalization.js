import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import DiagramPiePiece from '../diagram-pie-piece/diagram-pie-piece';

export default function DiagramLineDotsDetalization(props) {
    const pieces = [];
    const dotRadius = 10;
    const strokeWidth = 5;
    const textHeight = 20;
    const lineGap = 50;
    const upperGap = 20;

    if (props.pieces && props.pieces.length > 0) {
        const totalPieces = props.pieces.length;
        for (let i=0; i < totalPieces; i++) {
            const piece = props.pieces[i];
            console.log("-----------", piece.name);
            if (props.isHorizontal) {
                const x1 = props.diagramSize + 50 + dotRadius + props.shift;
                const x2 = x1 + dotRadius * 2;
                const y1 = upperGap + dotRadius + lineGap * i;
                const y2 = y1 + textHeight;

                pieces.push(<circle cx={x1} cy={y1} r={dotRadius} fill={piece.fillColor} fill-opacity={0.3} stroke={piece.color} stroke-width={strokeWidth}/>)
                pieces.push(<text x={x2} y={y1} font-weight="bold">{`${piece.name}`}</text>)
                pieces.push(<text x={x2} y={y2} font-weight="bold">{`Average value for selected period: ${piece.value} ${piece.currency}`}</text>)
            }
        }
    } 
    return (
        <>
        {pieces}
        </>
    )
}
