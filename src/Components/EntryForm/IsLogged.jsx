import React from 'react';
import { Button } from 'react-bootstrap';

const IsLogged = (props) => {

    return (
        <div>
            <h1>Добро пожаловать, {props.form.email}</h1>
                <Button 
                    className='btn btn-danger m-3'
                    onClick={() => props.setShow(true)}
                    >
                        Выйти
                </Button>   
        </div>
    );
    };

export default IsLogged;