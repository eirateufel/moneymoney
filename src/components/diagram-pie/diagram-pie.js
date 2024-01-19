import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import DiagramPiePiece from '../diagram-pie-piece/diagram-pie-piece';
import DiagramPieDetalization from '../diagram-pie-detalization/diagram-pie-detalization';
import diagramPieStyles from './diagram-pie.module.css';

const colors = [
    "#F5FF7D",
    "#B6FF7D",
    "#5BFF6C",
    "#A6FFE4",
    "#40DDFF",
    "#7DB9FF",
    "#807DFF",
    "#BE7DFF",
    "#F9B0FF",
    "#FF49B6",
    "#FF3156",
    "#FF7F22"
]

const colors2 = [
    "#B670E1",//"#BCAEF3",
    "#5D69C6",
    "#272D5F",
    "#88B2E3",
    "#D3E1F1",
    "#FDA1CD",
    "#FFCFDB",
    "#E8426A",
    "#FF937B",
    "#FFAE11",
    "#FBE053",
    "#F7FF9D"
]

const colors10 = [
    "#1F1640",
    "#BCAEF3",
    "#5D69C6",
    "#0415A5",//"#373E79",
    "#FDA1CD",
    "#E8426A",
    "#B20000",
    "#FFAE11",
    "#FBE053",
    "#F7FF9D",
    //"#9DD861",
    //"#3C754C"
]

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

export default function DiagramPie(props) {
    const [secondLevelDiagram, setSecondLevelDiagram] = useState([]);
    const [secondLevelDetalization, setSecondLevelDiagramDetalization] = useState([])
    const [secondLevelDiagramBorder, setSecondLevelDiagramBorder] = useState([]);
    const [secondLevelDiagramName, setSecondLevelDiagramName] = useState([]);
    const [line1, setLine1] = useState([]);
    const [line2, setLine2] = useState([]);
    const [arrowToSecondLevel, setArrowToSecondLevel] = useState([]);
    const [pieceOutline1, setPieceOutline1] = useState([]);
    const [pieceOutline2, setPieceOutline2] = useState([]);

    const diagramSize = props.size;
    const border = props.border;

    const removeSecondLevelDiagram = () => {
        setSecondLevelDiagram([]);
        setSecondLevelDiagramBorder([]);
        setArrowToSecondLevel([]);
        setSecondLevelDiagramDetalization([]);
        setSecondLevelDiagramName([]);
        setPieceOutline2([]);
        setLine2([]);
    }

    const drawLine = (dotRadius, upperGap, lineGap, totalPieces, i, shift) => {
        return <line x1={diagramSize + 50 + dotRadius * 2 + 20 + border + shift} y1={upperGap + dotRadius + lineGap * (totalPieces - i - 1) + 7 + border} x2={diagramSize + 50 + dotRadius * 2 + 20 + 270 - (dotRadius * 2 - 22) + border + shift} y2={upperGap + dotRadius + lineGap * (totalPieces - i - 1) + 7 + border} stroke="black" stroke-width={2}/>;
    }

    const drawArrow = (dotRadius, upperGap, lineGap, totalPieces, i) => {
        const arrow = <line x2={diagramSize * 2.5 + border} y2={diagramSize / 2 + border} x1={diagramSize + 50 + dotRadius * 2 + 20 + 270 - (dotRadius * 2 - 22) + border} y1={upperGap + dotRadius + lineGap * (totalPieces - i - 1) + 7 + border} stroke="black" stroke-width={2}/>;
        setArrowToSecondLevel(arrow)
    }

    const drawOutline = (shift, startPercent, endPercent, color) => {
        return <DiagramPiePiece size={props.size} shift={shift} startPercent={startPercent} endPercent={endPercent} strokeColor={color} strokeWidth={30} key={`pie-piece-stroke`} id={`pie-piece-stroke}`} outer={true} border={border} />;
    }

    const drawDetalization = (pieces, size, shift) => {
        return <DiagramPieDetalization pieces={pieces} isHorizontal={true} diagramSize={size} shift={shift} border={border} />
    }

    const buildDiagram = (details, shift, callback) => {
        if (!details || details.length === 0) return;
        let currentColors = [];
        console.log("details.length", details.length);
        if (details.length > 10) currentColors = colors2;
        else {
            const portion = Math.floor(colors10.length / details.length);
            colors10.forEach((c, i) => {
                const j = i / portion;
                console.log("i, j, portion");
                console.log(i, j, portion)
                if (i % portion === 0) currentColors.push(c);
            })
        }
        const pieces = [];
        const totalPieces = details.length;
        const sorted = details.sort((a, b) => a.total - b.total);
        sorted.forEach((piece, i) => piece.fillColor = currentColors[i]);

        const total = sorted.map(e => e.total).reduce((accumulator, currentValue) => accumulator + currentValue);
        let lastNum = 0;
        for (let i=0; i < sorted.length; i++) {
            const piece = sorted[i];
            const endPercent = (lastNum + piece.total) / total;
            const startPercent = lastNum / total;
            lastNum += piece.total;

            pieces.push(<DiagramPiePiece size={props.size} shift={shift} startPercent={startPercent} endPercent={endPercent} strokeColor={props.strokeColor} fillColor={piece.fillColor} key={`pie-piece-${i}-${shift}`} id={`pie-piece-${i}`} onClick={callback} totalPieces={totalPieces} i={i} details={piece.details} border={border} />)
        }
        return pieces;
    }

    const onClickSecondLevel = (dotRadius, upperGap, lineGap, totalPieces, i, shift, startPercent, endPercent, color) => {
        console.log("onClickSecondLevel")
        const line = drawLine(dotRadius, upperGap, lineGap, totalPieces, i, shift);
        setLine2(line)
        const outline = drawOutline(shift, startPercent, endPercent, color);
        setPieceOutline2(outline);
        console.log(props.pieces[props.pieces.length - i])
    }

    const onClickFirstLevel = (dotRadius, upperGap, lineGap, totalPieces, i, shift, startPercent, endPercent, color, details) => {
        const line = drawLine(dotRadius, upperGap, lineGap, totalPieces, i, shift);
        setLine1(line);
        removeSecondLevelDiagram();
        const outline = drawOutline(shift, startPercent, endPercent, color);
        setPieceOutline1(outline);
        if (!details || details.length < 1) return;
        drawArrow(dotRadius, upperGap, lineGap, totalPieces, i);
        const newDiagram = buildDiagram(details, 800, onClickSecondLevel);
        setSecondLevelDiagramName(props.pieces[i].name);
        const newDetalization = <DiagramPieDetalization pieces={details} isHorizontal={true} diagramSize={props.size} shift={props.size * 2} border={border} />
        setSecondLevelDiagramDetalization(newDetalization)
        const strokeW = 3;
        setSecondLevelDiagramBorder(<circle stroke={"black"} stroke-width={strokeW}fill="transparent" r={diagramSize / 2 + strokeW / 2 } cx={diagramSize * 2.5 + border} cy={diagramSize / 2 + border}/>)
        setSecondLevelDiagram(newDiagram);
    }

    const diagram = buildDiagram(props.pieces, 0, onClickFirstLevel);
    const detalization = drawDetalization(props.pieces, props.size, 0)
    
    return (
        <div>
            <svg width={(diagramSize + border) * 4} height={70}>
                <text x={0} y={50} font-weight="bold" font-size={30}>{props.name}</text>
                <text x={diagramSize * 2} y={50} font-weight="bold" font-size={30}>{secondLevelDiagramName}</text>
            </svg>
            <svg className={diagramPieStyles.middle} width={(diagramSize + border) * 4} height={diagramSize + border * 2}>
                {diagram}
                {detalization}
                {arrowToSecondLevel}

                {secondLevelDiagramBorder}
                {secondLevelDiagram}
                {pieceOutline1}
                {pieceOutline2}

                {secondLevelDetalization}
                {line1}
                {line2}

            </svg>
        </div>
    )
}
