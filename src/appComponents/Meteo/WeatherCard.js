import React from 'react';
import {format} from 'date-fns';
import frLocale from 'date-fns/locale/fr';


const WeatherCard = ({item, isOpen, onToggle}) => {
    const formattedDate = format(new Date(item.dt_txt), 'EEEE d MMMM yyyy', {locale: frLocale});

    return (

        <div className="list-group">
            <a onClick={onToggle} className="list-group-item list-group-item-action mb-2">
                {isOpen ? (
                    <div className="card-body">
                        <p className="text-center font-bold"><strong>{formattedDate}</strong></p>
                        <hr/>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt=""/>
                        <hr/>
                        <p>Température : {item.main.temp}°C</p>
                        <p>Ressenti : {item.main.feels_like}°C</p>
                        <p>Humidité : {item.main.humidity}%</p>
                        <p>Description : {item.weather[0].description}</p>
                    </div>
                ) : (
                    <div className="d-flex">
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt=""/>
                        <p><strong> {formattedDate} </strong></p>
                        <p> {item.main.temp}°C </p>
                    </div>
                )}
            </a>
        </div>
    );
};

export default WeatherCard;
