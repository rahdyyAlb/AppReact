import React, { useState, useEffect } from 'react';
import { getWeatherData } from './API';
import cities from './City';
import Views from './Views';
import  GeolocAPI  from "./GeolocAPI";

function Weather() {
    const api = "cc6546985920de2dee43a53fa1ac2f47";
    const [userLocation, setUserLocation] = useState(null);
    const { nomVille: detectedCity } = GeolocAPI();
    useEffect(() => {

        if (detectedCity) {
            setNomVille(detectedCity);
            cities.unshift(detectedCity)
        }

    }, [detectedCity, userLocation , cities]);
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [forecastData, setForecastData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [nomVille, setNomVille] = useState(null);





    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWeatherData(selectedCity, api);
                setForecastData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données météo:', error);
            }
        };

        fetchData();
    }, [selectedCity, api]);
    const handleCityChange = (city) => {
        setSelectedCity(city);
    };

    return (
        <div className="mt-5">
            <label htmlFor="city-select">Sélectionnez une ville :  </label>
            <select id="city-select" value={selectedCity} onChange={(event) => handleCityChange(event.target.value)}>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city.split(',')[0]}
                    </option>
                ))}
            </select>
            {nomVille && <p className="mt-3"> Vous pouvez selectionnez votre ville <strong>{nomVille}</strong> dans la liste </p>}
            <Views forecastData={forecastData} currentIndex={currentIndex} selectedCity={selectedCity} />
        </div>
    );
}

export default Weather;
