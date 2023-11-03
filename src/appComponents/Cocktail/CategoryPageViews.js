import React, {useState, useEffect} from 'react';
import '../../App.css';
import CategoryMenu from "./CategoryMenu";
import CategoryPage from "./CategoryPage";

function HomeViews() {

    return (
        <div className="mt-5">
            <CategoryMenu/>
            <CategoryPage/>
        </div>
    );
}

export default HomeViews;
