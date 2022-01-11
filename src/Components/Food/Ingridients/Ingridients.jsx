import React from 'react';

const Ingridients = (props) => {
        if(props.meal.id === 'grechka') {
        return (
        <>
             <h3>Гречневая каша</h3> 
             <h5>Ингридиенты:</h5>
             <ul>
                 <li>гречневая крупа</li>
                 <li>вода</li>
                 <li>соль</li>
                 <li>масло</li>
             </ul>
        </>)
        } if (props.meal.id === 'ris') {
            return (
            <>
                 <h3>Рис</h3> 
                 <h5>Ингридиенты:</h5>
                 <ul>
                     <li>рис длиннозерновой</li>
                     <li>вода</li>
                     <li>соль</li>
                     <li>масло</li>
                 </ul>
            </>)
        } if (props.meal.id === 'makarony') {
            return (
            <>
                <h3>Макароны</h3> 
                <h5>Ингридиенты:</h5>
                <ul>
                    <li>макароны</li>
                    <li>вода</li>
                    <li>соль</li>
                    <li>масло</li>
                </ul>
            </>)
        }
        return ( 
        <></>
    )}

export default Ingridients;


