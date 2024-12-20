"use client";
import React from 'react';
import { Card, Button, Typography, Divider } from 'antd';
import { useRouter } from 'next/navigation'; // Перевір, що використовуєш цей імпорт
import { EnvironmentOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import './FlightCard.css';

const { Title, Text } = Typography;

const FlightCard = ({ flight }) => {
  const { id, basePrice, departureTime, arrivalTime, departureAirportName, arrivalAirportName, duration } = flight;

  const router = useRouter(); // Використовуємо useRouter для навігації

  const handleButtonClick = () => {
    router.push(`/bookticket?id=${id}`); // Додаємо id у посилання
  };

  const formattedDepartureTime = dayjs(departureTime).format('HH:mm');
  const formattedArrivalTime = dayjs(arrivalTime).format('HH:mm');
  const formattedDepartureDate = dayjs(departureTime).format('YYYY-MM-DD');
  const formattedArrivalDate = dayjs(arrivalTime).format('YYYY-MM-DD');

  const formatDuration = (duration) => {
    const [hours, minutes] = duration.split(':').map(Number);
    return `${hours}h ${minutes}m`;
  };

  return (
    <Card className="flight-card" bordered hoverable>
      <div className="card-content">
        <div className="price-section">
          <Title level={3} style={{ color: '#FF6600' }}>${basePrice}</Title>
          <Button type="primary" shape="round" onClick={handleButtonClick}>Select Ticket</Button>
        </div>
        <Divider type="vertical" style={{ height: '100%', margin: '0 20px' }} />
        <div className="details-section">
          <div className="flight-columns">
            <div className="flight-info">
              <EnvironmentOutlined className="icon" />
              <div>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', display: 'block' }}>{formattedDepartureTime}</Text>
                <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: '14px', display: 'block' }}>{departureAirportName}</Text>
                <Text style={{ color: 'gray', fontSize: '14px', display: 'block' }}>{formattedDepartureDate}</Text>
              </div>
            </div>
            <div className="route-line">
              <Divider style={{ backgroundColor: '#0D92F4', height: 5, width: '250px', marginTop: '15px' }} />
              <Text className="duration-text">{formatDuration(duration)}</Text>
            </div>
            <div className="flight-info">
              <EnvironmentOutlined className="icon" />
              <div>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', display: 'block' }}>{formattedArrivalTime}</Text>
                <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: '14px', display: 'block' }}>{arrivalAirportName}</Text>
                <Text style={{ color: 'gray', fontSize: '14px', display: 'block' }}>{formattedArrivalDate}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FlightCard;
