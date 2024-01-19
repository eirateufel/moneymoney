import React from 'react';
import homepageStyles from './homepageStyles.module.css';
import DiagramPie from '../diagram-pie/diagram-pie';

export default function HomePage() {
    return (
        <div className={homepageStyles.mainSection}>
            <DiagramPie></DiagramPie>
        </div>
    )
}