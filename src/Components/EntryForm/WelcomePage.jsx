import React, { useState } from 'react';
import EntryForm from './EntryForm';
import IsLogged from './IsLogged';

const WelcomePage = () => {

    const [form, setForm] = useState({
        email: '',
        password:'',
        newPassword:''
    })

    const [show, setShow] = useState(true)

    return (
        <div>
            {show?
            <EntryForm
            form={form}
            setForm={setForm}
            setShow={setShow}
            />:
            <IsLogged
            form={form}
            setShow={setShow}
            />}
        </div>
    );
};

export default WelcomePage;