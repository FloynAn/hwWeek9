import React, { useState } from 'react';
import Ingridients from '../Ingridients/Ingridients';

const Recepies = () => {

    const [meal, setMeal] = useState({
        id:'',
        isChecked: false
    })


    function handleChange (e) {
            setMeal({
            ...meal,
            id: e.target.id,
            isChecked: e.target.checked
        })
    }

    return (
        <div>
            <img 
                src="https://pro-biznes.ru/upload/iblock/eec/eec90237e5121cc1b689539fafb64b62.png" 
                alt="LOGO" 
                style={{width: '150px'}}
            />
            <h1 
                style={{color:'red'}} 
                className="my-2"> 
                    MEGA STAR EXTRA ULTRA FOOD 
            </h1>
            <h3>МЕНЮ:</h3>
            <input 
                type="radio" 
                id="grechka" 
                name="food" 
                className="my-2" 
                value='r-1' 
                onChange={handleChange}
            />
                <label htmlFor='plov'>Гречневая каша</label>
                <br/>
            <input 
                type="radio" 
                id="ris" 
                name="food" 
                className="my-2" 
                value='r-1' 
                onChange={handleChange}
            />
                <label htmlFor='ris'>Рис</label>
                <br/>
            <input 
                type="radio" 
                id="makarony" 
                name="food" 
                className="my-2" 
                value='r-1' 
                onChange={handleChange}
            />
                <label htmlFor='makarony'>Макароны</label>
                <br/>
            <h6 style={{color:'red'}} 
                className="my-5">
                Кого не устраивает меню, тот готовит сам
            </h6>

            <Ingridients
            meal={meal}
            />
        </div>
    );
};

export default Recepies;