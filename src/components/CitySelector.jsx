function CitySelector({ cities, onCitySelect }) {
    const handleChange = (e) => {
        const selectedCity = cities.find(city => city.name === e.target.value);
        onCitySelect(selectedCity);
    };

    return (
        <select title="city-select" onChange={handleChange}>
            <option value="">Select a city</option>
            {cities.map(city => (
                <option key={city.name} value={city.name}>
                    {city.name}
                </option>
            ))}
        </select>
    );
}

export default CitySelector;