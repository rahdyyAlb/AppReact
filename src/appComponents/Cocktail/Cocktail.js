import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeViews from "./HomeViews";
import CategoryPageViews from "./CategoryPageViews";
import CocktailDetailViews from "./CocktailDetailViews";


function Cocktail() {
    return (
        <Router>
            <Switch>
                <Route path="/cocktail" exact component={HomeViews}/>
                <Route path="/cocktail/category/:category" component={CategoryPageViews}/>
                <Route path="/cocktail/:id" component={CocktailDetailViews}/>
            </Switch>
        </Router>
    );
}

export default Cocktail;
