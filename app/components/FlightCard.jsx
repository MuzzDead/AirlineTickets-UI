// FlightCard.jsx
import React from 'react';
import { Card, Button, Typography, Divider } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import './FlightCard.css';

const { Title, Text } = Typography;

const FlightCard = ({ flight }) => {
  const {
    price,
    departureDateTime,
    arrivalDateTime,
    departureCity,
    arrivalCity,
    departureAirport,
    arrivalAirport,
    flightDuration,
  } = flight;

  const formattedDepartureTime = new Date(departureDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedArrivalTime = new Date(arrivalDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDepartureDate = new Date(departureDateTime).toLocaleDateString();
  const formattedArrivalDate = new Date(arrivalDateTime).toLocaleDateString();

  return (
    <Card className="flight-card" bordered hoverable>
      <div className="card-content">
        <div className="price-section">
          <Title level={3} style={{ color: '#FF6600' }}>${price} </Title>
          <Button type="primary" shape="round">Select Ticket</Button>
        </div>
        <Divider type="vertical" style={{ height: '100%', margin: '0 20px' }} />
        <div className="details-section">
          <div className="flight-columns">
            <div className="flight-info">
              <EnvironmentOutlined className="icon" />
              <div>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', display: 'block' }}>{formattedDepartureTime}</Text>
                <Text style={{ fontSize: '18px', fontWeight: 'bold', display: 'block' }}>{departureCity}</Text>
                <Text style={{ color: 'gray', fontSize: '14px', display: 'block' }}>{departureAirport}</Text> {/* Аеропорт відправлення */}
                <Text style={{ color: 'gray', fontSize: '14px', display: 'block' }}>{formattedDepartureDate}</Text>
              </div>
            </div>
            
            <div className="route-line">
              <Divider style={{ backgroundColor: '#0D92F4', height: 4, width: '150px', marginTop: '15px' }} />
              <Text className="duration-text">{flightDuration} hr</Text>
            </div>
            
            <div className="flight-info">
              <EnvironmentOutlined className="icon" />
              <div>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', display: 'block' }}>{formattedArrivalTime}</Text>
                <Text style={{ fontSize: '18px', fontWeight: 'bold', display: 'block' }}>{arrivalCity}</Text>
                <Text style={{ color: 'gray', fontSize: '14px', display: 'block' }}>{arrivalAirport}</Text> {/* Аеропорт прибуття */}
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
