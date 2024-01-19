import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Switch from '../switch/switch';
import { testData } from '../TESTDATA/data';
import modalStyles from './modal.module.css';
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const modal = document.getElementById('modal')

export default function Modal(props) {
    const [isIncome, setIsIncome] = useState(true);
    console.log("Isincome", isIncome)
    //const [categories, setCategories] = useState(findCategories(testData, isIncome))
    const categories = findCategories(testData, isIncome);
    const list = categories.map(cat => <div>{cat.rootName}</div>)
    const unmountModal = props.unmountModal;
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                unmountModal(); // не уверена считается ли это использованием хука useState в условном блоке, т.к. в конечном счете unmountModal вызывает useState, но как изящно выйти из положения учитывая что нужно проверить то, что был нажат именно Esc? 
            }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    }, [unmountModal]);

    const body = document.getElementsByTagName("body")[0];
    var w = body.offsetWidth;
    var h = body.clientHeight;

    return ReactDOM.createPortal(
        <div className={modalStyles.overlay} style={{width: w, height: h}}>
            <div className={modalStyles.mainSection}>
                <div className={modalStyles.header}>
                    <div className={modalStyles.date}>{`Date: ${monthNames[props.month]} ${props.day}, ${props.year}`}</div>
                    <div className={modalStyles.switchContainer}>
                        <div className={isIncome ? modalStyles.activeOption : modalStyles.inactiveOption}>Income</div>
                        <Switch setSwitchState={setIsIncome}></Switch>
                        <div className={isIncome ? modalStyles.inactiveOption : modalStyles.activeOption}>Outcome</div>
                    </div>
                </div>
                {list}
                
            </div>
        </div>
    , modal)
}

function findCategories(data, isIncome) {
    const myCategories = [];
    Object.keys(data).forEach(key => {
        if (isIncome && data[key].isIncome) myCategories.push(data[key])
        else if (!isIncome && !data[key].isIncome) myCategories.push(data[key])
    })
    const mapping = myCategories.map(cat => findEndCategories(cat));
    return mapping;
}

function findEndCategories(data) {
    const mappedData = {};
    console.log(data)

    const rootName = data.name;
    const children = findLastChild(data).flat(7);
    console.log(children)
    mappedData.rootName = rootName;
    mappedData.children = children;
    return mappedData;
}

function findLastChild(obj) {
    if (obj.children) return Object.keys(obj.children).map(key => findLastChild(obj.children[key]))
    else return obj.name;
}