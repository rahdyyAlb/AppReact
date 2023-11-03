import React, {useEffect, useState} from "react";
import axios from "axios";

const GeolocAPI = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [nomVille, setNomVille] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            },
            error => {
                setError(error);
            }
        );
    }, []);

    useEffect(() => {
        if (latitude && longitude) {
            axios
                .get(
                    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=bc063af44e0d469faa39956c39290d5f&language=fr`
                )
                .then(response => {
                    if (response.data.results.length > 0) {
                        const villeAPI = response.data.results[0].components.city;
                        setNomVille(villeAPI);
                    }
                })
                .catch(error => {
                    setError(error);
                });
        }
    }, [latitude, longitude]);

    if (error) {
        throw new Error("Erreur de géolocalisation : " + error.message);
    }

    return {nomVille, latitude, longitude};
};

export default GeolocAPI;
