
export const getWeatherData = async (city, api) => {
    try {
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api}&lang=fr&units=metric`);
        const currentWeatherData = await currentWeatherResponse.json();

        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${api}&lang=fr&units=metric`);
        const forecastData = await forecastResponse.json();

        return { current: currentWeatherData, future: forecastData };
    } catch (error) {
        console.error('Erreur lors de la récupération des données météo:', error);
        throw error;
    }
};
