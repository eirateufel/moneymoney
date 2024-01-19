import React from 'react';
import catecoriesListStyles from './categories-list.module.css'

export default function CategoriesList(props) {
    const roots = props.data.map(cat => {
        return (
            <div>{cat.rootName}</div>
        )
    })
    return (
        <div className={catecoriesListStyles.mainSection}>

        </div>
    )
}