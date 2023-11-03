import 'bootstrap/js/src/collapse'
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarApp from './appComponents/NavbarApp/NavbarApp';
import TodoList from './appComponents/Todolist/TodoList';
import apps from './appComponents/data/appData';
import Home from "./Home";
import Weather from "./appComponents/Meteo/Weather";
import Cocktail from "./appComponents/Cocktail/Cocktail";

function App() {
    return (
        <Router>
            <NavbarApp apps={apps}/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/todo" component={TodoList}/>
                <Route path="/meteo" component={Weather}/>
                <Route path="/cocktail" component={Cocktail}/>
            </Switch>
        </Router>
    );
}

export default App;
