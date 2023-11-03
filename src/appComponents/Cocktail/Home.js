import React, {useState, useEffect} from 'react';
import {getCocktailData} from './APICocktail';

const Home = () => {
    const [cocktailData, setCocktailData] = useState(null);
    const [currentPage, setCurrentPage] = useState('a');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCocktailData(currentPage);
                setCocktailData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données cocktail:', error);
            }
        };

        fetchData();
    }, [currentPage]);

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const handlePageChange = (letter) => {
        setCurrentPage(letter);
    };

    if (!cocktailData) {
        return (
            <div className='d-flex justify-content-center w-100'>
                <img src="/Loading.gif" alt="chargement"/>
            </div>
        );
    }

    return (
        <div>
            <div className=' d-flex flex-wrap mt-4 mb-4'>
                {cocktailData[currentPage].map(cocktail => (
                    <div className='card mt-2 me-2 cocktail-item card-cocktail' key={cocktail.idDrink}>
                        <img className="card-img-top" src={cocktail.strDrinkThumb} alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title"><strong>{cocktail.strDrink}</strong></h5>
                            <p className="card-text">Category: <strong>{cocktail.strCategory}</strong></p>
                            <p className="card-text">Alcoholic: <strong>{cocktail.strAlcoholic}</strong></p>

                            <a className='btn btn-info' href={`/cocktail/${cocktail.idDrink}`}> voir detail</a>

                        </div>
                    </div>
                ))}
            </div>
            <div className='pagination'>
                {alphabet.split('').map(letter => (
                    <button
                        key={letter}
                        className={`pagination-button ${currentPage === letter ? 'active' : ''}`}
                        onClick={() => handlePageChange(letter)}
                    >
                        {letter.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Home;
