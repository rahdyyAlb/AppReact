import React, {useState, useEffect} from 'react';
import WeatherCard from './WeatherCard';
import {format} from 'date-fns';
import frLocale from 'date-fns/locale/fr';

const Views = ({forecastData, currentIndex, selectedCity}) => {
    const [cardOpen, setCardOpen] = useState([]);

    useEffect(() => {
        if (forecastData && forecastData.future && forecastData.future.list) {
            setCardOpen(Array(forecastData.future.list.length).fill(false));
        }
    }, [forecastData]);

    if (!forecastData || !forecastData.current) {
        return <div className='d-flex justify-content-center w-100'>
            <img src="/Loading.gif" alt="chargement"/>
        </div>;
    }

    const currentDate = new Date();
    const formattedDate = format(currentDate, 'EEEE d MMMM yyyy', {locale: frLocale});
    const dateToday = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    const currentWeather = forecastData.current;
    const futureWeather = forecastData.future;

    const handleCardToggle = (index) => {
        const updatedCardOpen = [...cardOpen];
        updatedCardOpen[index] = !updatedCardOpen[index];
        setCardOpen(updatedCardOpen);
    };


    const getWeatherIcon = (iconCode) => {
        const iconPrefix = iconCode.slice(0, 2);

        switch (iconPrefix) {
            case "01":
                return "/sun.jpg";
            case "02":
                return "/nuage-leger.avif";
            case "03":
                return "/nuage-leger.avif";
            case "04":
                return "/nuage.webp";
            case "09":
                return "/pluis.jpg";
            case "10":
                return "/pluis_1.jpg";
            case "11":
                return "/eclaire.jpg";
            case "13":
                return "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp";
            case "50":
                return "/mist.jpg";
            default:
                return "/nuage-leger.avif";
        }
    };

    const weatherIcon = getWeatherIcon(currentWeather.weather[0].icon);

    return (
        <section key={currentIndex}>
            <div className="container py-5 h-100">
                <div className="d-flex justify-content-between align-items-start h-100">
                    <div className="col-md-10 col-lg-8 col-xl-6">
                        <div className="card text-white">
                            <div className="bg-image">
                                <img className="card-img" src={weatherIcon}
                                     alt={`Icone météo pour ${currentWeather.weather[0].description}`}/>
                                <div className="mask"></div>
                            </div>
                            <div className="card-img-overlay text-dark p-5">
                                <h4><strong>{dateToday}</strong></h4>
                                <div className="d-flex justify-content-around mt-2">
                                    <div>
                                        <h4 className="mb-0">{selectedCity} </h4>
                                        <p className="display-2 my-3">{currentWeather.main.temp}°C</p>
                                        <p className="mb-2">Ressenti <strong>{currentWeather.main.feels_like}°C</strong>
                                        </p>
                                        <p className="mb-2">Humidité <strong>{currentWeather.main.humidity}%</strong>
                                        </p>
                                        <h5>{currentWeather.weather[0].description}</h5>
                                        <h5>{currentWeather.weather[0].main}</h5>
                                    </div>
                                    <div>
                                        <img
                                            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
                                            alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-group">
                        {futureWeather && (
                            <h5 className="mb-4">Prévisions météo pour les 5 prochains jours</h5>
                        )}
                        {futureWeather.list
                            .filter(item => {
                                const date = new Date(item.dt_txt);
                                const hours = date.getHours();
                                return hours === 12;
                            })
                            .map((item, index) => (
                                <WeatherCard
                                    key={index}
                                    item={item}
                                    isOpen={cardOpen[index]}
                                    onToggle={() => handleCardToggle(index)}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Views;
