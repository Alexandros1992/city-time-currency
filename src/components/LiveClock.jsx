import { useState, useEffect } from 'react';

function LiveClock({ timezone }) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const formattedTime = new Intl.DateTimeFormat('en-GB', {
                timeZone: timezone,
                dateStyle: "full",
                timeStyle: "long"
            }).format(new Date());

            setTime(formattedTime);
        };

        updateTime(); // Initial call to set time immediately
        const interval = setInterval(updateTime, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, [timezone]);

    return (
        <p><strong>Local Time:</strong> {time}</p>
    );
}

export default LiveClock;