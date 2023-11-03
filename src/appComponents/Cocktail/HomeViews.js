import React, {useState, useEffect} from 'react';
import Home from './Home';
import '../../App.css';
import CategoryMenu from "./CategoryMenu";
import "bootstrap"

function HomeViews() {

    return (
        <div className="mt-5">
            <div className="d-flex">
                <CategoryMenu/>
            </div>
            <Home/>
        </div>
    );
}

export default HomeViews;
