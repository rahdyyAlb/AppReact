import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import CocktailDetail from './CocktailDetail';
import '../../App.css';

function Cocktail() {
    return (
        <div className="mt-5">
            <Router>
                <Switch>
                    <Route path="/cocktail" exact component={Home} />
                    <Route path="/cocktail/:id" component={CocktailDetail} />
                </Switch>
            </Router>
        </div>
    );
}

export default Cocktail;
