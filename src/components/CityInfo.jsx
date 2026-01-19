import { useState, useEffect } from 'react';
import LiveClock from './LiveClock.jsx';

function CityInfo({ city}) {
    const [currency, setCurrency] = useState(null);
    const [flag, setFlag] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountryData = async () => {
            setLoading(true);

            const response = await fetch(`https://restcountries.com/v3.1/alpha/${city.country}`);
            const data = await response.json();

            const currencyObj = data[0].currencies;
            const currencyCode = Object.keys(currencyObj)[0];

            setCurrency({
                code: currencyCode,
                name: currencyObj[currencyCode].name,
                symbol: currencyObj[currencyCode].symbol
            });
            setFlag(data[0].flags.svg);
            setLoading(false);
        };

        fetchCountryData();
    }, [city]);
    if (loading) {
        return <p>Loading city information...</p>;
    }

    return (
        <div className = "result">
            <img src={flag} alt="Country Flag" />
            <p><strong>Country:</strong>{city.country}</p>
            <LiveClock timezone={city.timezone} />
            <p><strong>Currency:</strong> {currency.name} ({currency.code}) - {currency.symbol}</p>
        </div>
    );
}

export default CityInfo;