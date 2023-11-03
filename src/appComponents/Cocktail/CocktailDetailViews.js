import React, {useState, useEffect} from 'react';
import '../../App.css';
import CategoryMenu from "./CategoryMenu";
import CocktailDetail from "./CocktailDetail";

function HomeViews() {

    return (
        <div className="mt-5">
            <CategoryMenu/>
            <CocktailDetail/>
        </div>
    );
}

export default HomeViews;
