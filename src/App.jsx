import { useState } from 'react';
import CityInfo from './components/CityInfo.jsx';
import CitySelector from './components/CitySelector.jsx';
import './App.css';

const cities = [
    { name: "Athens", country: "Greece", timezone: "Europe/Athens" },
    { name: "London", country: "United Kingdom", timezone: "Europe/London" },
    { name: "New York", country: "United States", timezone: "America/New_York" },
    { name: "Tokyo", country: "Japan", timezone: "Asia/Tokyo" },
    { name: "Sydney", country: "Australia", timezone: "Australia/Sydney" }
];

function App() {
    const [selectedCity, setSelectedCity] = useState(null);

    return (
        <div className="App">
            <h1>🌍 City Time & Currency</h1>
            <CitySelector cities={cities} onSelect={setSelectedCity} />

            {selectedCity && <CityInfo city={selectedCity} />}
        </div>
    );
}

export default App;