// FlightList.jsx
import React from 'react';
import FlightCard from './FlightCard';

const FlightList = ({ flights, departureCity, arrivalCity }) => {
    return (
        <div className="flights-list">
            {flights.map((flight) => (
                <FlightCard 
                    key={flight.id} 
                    flight={flight} 
                    departureCity={departureCity} 
                    arrivalCity={arrivalCity} 
                />
            ))}
        </div>
    );
};

export default FlightList;
