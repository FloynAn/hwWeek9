import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Counter from './Components/Counter/Counter';
import WelcomePage from './Components/EntryForm/WelcomePage';
import Recepies from './Components/Food/Recepies/Recepies';
import MainPage from './Components/MainPage/MainPage';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/counter' component={Counter}/>
                <Route exact path='/recipies' component={Recepies}/>
                <Route exact path='/welcome' component={WelcomePage}/>
            </Switch>
        </BrowserRouter>
        </div>
    );
};

export default Routes;