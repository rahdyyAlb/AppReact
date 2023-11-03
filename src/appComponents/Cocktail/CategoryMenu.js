import React, {useState, useEffect} from 'react';
import {getCategories} from './APICocktail';

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);
    const [CategoryMenu, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!CategoryMenu);
    };


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryData = await getCategories();
                setCategories(categoryData);
            } catch (error) {
                console.error('Erreur lors de la récupération des catégories de cocktails:', error);
            }
        };

        fetchCategories();
    }, []);

    return (

        <div className="category-menu">
            <nav className="d-block align-items-start align-items-md-end flex-column flex-md-row">
                <div className="mt-3 w-100 d-flex justify-content-center">
                    <a href="/cocktail" className="btn"><h2>Acceuil</h2></a>
                    <a
                        className=" btn d-flex "
                        data-bs-toggle="collapse"
                        href="#CategoryCategoryMenuCollapse"
                        role="button"
                        aria-expanded={CategoryMenu ? 'true' : 'false'}
                        aria-controls="CategoryMenuCollapse"
                        onClick={handleMenuToggle}
                    >
                        <h2>Catégories de Cocktails </h2>
                    </a>
                </div>
                <div className={`collapse w-100 ${CategoryMenu ? 'show' : ''}`} id="CategoryMenuCollapse">
                    <div className="rounded-top-left" id="full-tabs">
                        <div className="row w-100 bg-light border-dark rounded-3">
                            {categories.map(category => (
                                <div key={category.strCategory} className="w-50 col-2">
                                    <a href={`/cocktail/category/${category.strCategory}`}>{category.strCategory}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default CategoryMenu;
