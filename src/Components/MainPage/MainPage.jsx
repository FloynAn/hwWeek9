import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
           <Link to='/counter'>
              <Button className='m-3 btn btn-info'>Счетчик</Button>   
            </Link>
            <Link to='/recipies'>
              <Button className='m-3 btn btn-info'>Еда</Button>   
            </Link>
            <Link to='/welcome'>
              <Button className='m-3 btn btn-info'>Форма</Button>   
            </Link>
            
        </div>
    );
};

export default MainPage;