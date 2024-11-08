// FlightList.jsx
"use client";
import React from 'react';
import FlightCard from './FlightCard';

const flights = [
  {
    price: 2500,
    departureDateTime: '2023-10-15T14:30:00',
    arrivalDateTime: '2023-10-15T16:30:00',
    departureCity: 'Kyiv',
    arrivalCity: 'Lviv',
    departureAirport: "Zhulyani",
    arrivalAirport:"Galician",
    flightDuration: 2,
  },
  {
    price: 3000,
    departureDateTime: '2023-10-16T10:00:00',
    arrivalDateTime: '2023-10-16T12:00:00',
    departureCity: 'Lviv',
    arrivalCity: 'Odesa',
    departureAirport: "Galician",
    arrivalAirport: "Holovniy",
    flightDuration: 2,
  }
];

const FlightList = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightList;
