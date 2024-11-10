// flights/page.js
"use client";
import React, { useEffect, useState } from "react";
import FlightList from "../components/FlightList";
import { Typography } from "antd";

const { Title } = Typography;

const FlightPage = () => {
  const [flights, setFlights] = useState([]);
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");

  const labelStyle = {
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom: '80px'
  };

  useEffect(() => {
    // Витягуємо знайдені рейси та назви міст із sessionStorage
    const storedFlights = sessionStorage.getItem("flights");
    const storedDepartureCity = sessionStorage.getItem("departureCity");
    const storedArrivalCity = sessionStorage.getItem("arrivalCity");

    if (storedFlights) {
      setFlights(JSON.parse(storedFlights));
    }
    if (storedDepartureCity && storedArrivalCity) {
      setDepartureCity(storedDepartureCity);
      setArrivalCity(storedArrivalCity);
    }
  }, []);

  return (
    <div>
      <Title level={2} style={labelStyle}>
        Flights on your route ({departureCity} &gt; {arrivalCity}):
      </Title>
      <FlightList
        flights={flights}
        departureCity={departureCity}
        arrivalCity={arrivalCity}
      />
    </div>
  );
};

export default FlightPage;
