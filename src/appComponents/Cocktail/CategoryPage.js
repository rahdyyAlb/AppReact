import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getCocktailsByCategory} from './APICocktail';

const CategoryPage = () => {
    const {category} = useParams();
    const [cocktails, setCocktails] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cocktailsPerPage] = useState(18);

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                const cocktailsData = await getCocktailsByCategory(category);
                setCocktails(cocktailsData);
            } catch (error) {
                console.error(`Erreur lors de la récupération des cocktails de la catégorie ${category}:`, error);
            }
        };

        fetchCocktails();
    }, [category]);

    const indexOfLastCocktail = currentPage * cocktailsPerPage;

    const indexOfFirstCocktail = indexOfLastCocktail - cocktailsPerPage;

    const currentCocktails = cocktails.slice(indexOfFirstCocktail, indexOfLastCocktail);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='d-flex flex-wrap mt-4 mb-4 justify-content-center'>
                {currentCocktails.map(cocktail => (
                    <div className='card mt-2 me-2 cocktail-item card-cocktail-Category' key={cocktail.idDrink}>
                        <img className="card-img-top" src={cocktail.strDrinkThumb} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>{cocktail.strDrink}</strong></h5>
                            <a href={`/cocktail/${cocktail.idDrink}`} className='btn btn-info'>Voir détail</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination mt-4 d-flex justify-content-center">
                {[...Array(Math.ceil(cocktails.length / cocktailsPerPage)).keys()].map(number => (
                    <button key={number + 1} onClick={() => paginate(number + 1)}
                            className="rounded-circle btn btn-secondary">
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
