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