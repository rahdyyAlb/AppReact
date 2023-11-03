export const getCocktailData = async () => {
    try {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const cocktailsByLetter = {};

        for (const letter of alphabet) {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
            const data = await response.json();
            cocktailsByLetter[letter] = data.drinks;
        }

        return cocktailsByLetter;
    } catch (error) {
        console.error('Erreur lors de la récupération des données cocktail:', error);
        throw error;
    }
};

export const getCocktailById = async (id) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        return data.drinks[0];
    } catch (error) {
        console.error('Erreur lors de la récupération des détails du cocktail par ID:', error);
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const data = await response.json();
        return data.drinks;
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories de cocktails:', error);
        throw error;
    }
};

export const getCocktailsByCategory = async (category) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();
        return data.drinks;
    } catch (error) {
        console.error(`Erreur lors de la récupération des cocktails de la catégorie ${category}:`, error);
        throw error;
    }
};


