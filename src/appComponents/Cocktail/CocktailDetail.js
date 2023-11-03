import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCocktailById } from './APiCocktail';

const CocktailDetail = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCocktailById(id);
                setCocktail(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du cocktail:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!cocktail) {
        return(
            <div className='d-flex justify-content-center w-100'>
            <img src="/Loading.gif" alt="chargement" />
        </div>
        )
    }

    return (
        <div className="d-flex justify-content-center ">
            <div className='card mt-2 me-2 cocktail-item w-50' key={cocktail.idDrink}>
                <img className="card-img-top" src={cocktail.strDrinkThumb} alt="" />
                <div className="card-body">
                    <h5 className="card-title"><strong>{cocktail.strDrink}</strong></h5>
                    <p className="card-text">Category: <strong>{cocktail.strCategory}</strong></p>
                    <p className="card-text">Alcoholic: <strong>{cocktail.strAlcoholic}</strong></p>
                    <p className="card-text">Glass: <strong>{cocktail.strGlass}</strong></p>
                    <p className="card-text">Instructions: <strong>{cocktail.strInstructions}</strong></p>
                    <p className="card-text">Ingredients:</p>
                    <ul>
                        {cocktail.strIngredient1 && <li>{cocktail.strIngredient1} - {cocktail.strMeasure1}</li>}
                        {cocktail.strIngredient2 && <li>{cocktail.strIngredient2} - {cocktail.strMeasure2}</li>}
                        {cocktail.strIngredient3 && <li>{cocktail.strIngredient3} - {cocktail.strMeasure3}</li>}
                        {cocktail.strIngredient4 && <li>{cocktail.strIngredient4} - {cocktail.strMeasure4}</li>}
                        {cocktail.strIngredient5 && <li>{cocktail.strIngredient5} - {cocktail.strMeasure5}</li>}
                        {cocktail.strIngredient6 && <li>{cocktail.strIngredient6} - {cocktail.strMeasure6}</li>}
                        {cocktail.strIngredient7 && <li>{cocktail.strIngredient7} - {cocktail.strMeasure7}</li>}
                        {cocktail.strIngredient8 && <li>{cocktail.strIngredient8} - {cocktail.strMeasure8}</li>}
                        {cocktail.strIngredient9 && <li>{cocktail.strIngredient9} - {cocktail.strMeasure9}</li>}
                        {cocktail.strIngredient10 && <li>{cocktail.strIngredient10} - {cocktail.strMeasure10}</li>}
                        {cocktail.strIngredient11 && <li>{cocktail.strIngredient11} - {cocktail.strMeasure11}</li>}
                        {cocktail.strIngredient12 && <li>{cocktail.strIngredient12} - {cocktail.strMeasure12}</li>}
                        {cocktail.strIngredient13 && <li>{cocktail.strIngredient13} - {cocktail.strMeasure13}</li>}
                        {cocktail.strIngredient14 && <li>{cocktail.strIngredient14} - {cocktail.strMeasure14}</li>}
                        {cocktail.strIngredient15 && <li>{cocktail.strIngredient15} - {cocktail.strMeasure15}</li>}
                    </ul>
                    <a href="/cocktail" className="btn btn-primary">Acceuil</a>
                </div>
            </div>
        </div>

    );
};

export default CocktailDetail;
