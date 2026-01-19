import { useState, useEffect } from 'react';
import LiveClock from './LiveClock.jsx';

function CityInfo({ city}) {
    const [currency, setCurrency] = useState(null);
    const [flag, setFlag] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
  const fetchCountryData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${city.code}`
      );

      if (!response.ok) throw new Error("API failed");

      const data = await response.json();

      const countryData = data[0];
      const currencyObj = countryData.currencies;
      const currencyCode = Object.keys(currencyObj)[0];

      setCurrency({
        name: currencyObj[currencyCode].name,
        code: currencyCode,
        symbol: currencyObj[currencyCode].symbol
      });

      setFlag(countryData.flags.svg);
    } catch (error) {
      console.error("API Error:", error);
      setCurrency(null);
      setFlag("");
    } finally {
      setLoading(false);
    }
  };

  fetchCountryData();
}, [city]);

    if (loading) {
        return <p>Loading city information...</p>;
    }

    return (
        <div className = "result">
            <img src={flag} alt="Country Flag" />
            <p><strong>Country:</strong> {city.country}</p>
            <LiveClock timezone={city.timezone} />
            <p><strong>Currency:</strong> {currency.name} ({currency.code}) - {currency.symbol}</p>
        </div>
    );
}

export default CityInfo;