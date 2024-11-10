// SearchFlights.jsx
'use client';
import React from 'react';
import { Form, Input, DatePicker, Button, message } from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';

const SearchFlights = () => {
    const router = useRouter();

    const onFinish = async (values) => {
        try {
            const date = dayjs(values.date);
            const requestData = {
                departureCity: values.departure,
                arrivalCity: values.arrival,
                departureDate: {
                    year: date.year(),
                    month: date.month() + 1,
                    day: date.date()
                }
            };

            const response = await axios.post('https://localhost:7025/api/Flight/find', requestData);

            if (response.status === 200) {
                console.log('Flights found:', response.data);

                // Зберігаємо рейси та міста у sessionStorage
                sessionStorage.setItem('flights', JSON.stringify(response.data));
                sessionStorage.setItem('departureCity', values.departure);
                sessionStorage.setItem('arrivalCity', values.arrival);

                // Переходимо на сторінку /flights
                router.push('/flights');
            } else {
                message.warning('No flights found!');
            }
        } catch (error) {
            console.error('Error finding flights:', error);
            message.error('An error occurred while searching for flights.');
        }
    };

    return (
        <div style={{ width: '70%', display: 'flex', alignItems: 'center', flexDirection: 'column', border: '1px solid #ccc', borderRadius: '8px', padding: '50px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
            <Form onFinish={onFinish} layout="inline">
                <Form.Item name="departure" rules={[{ required: true, message: 'Please input your departure!' }]}>
                    <Input placeholder="Departure" style={{ width: '250px', height: '50px' }} />
                </Form.Item>
                <Form.Item name="arrival" rules={[{ required: true, message: 'Please input your arrival!' }]}>
                    <Input placeholder="Arrival" style={{ width: '250px', height: '50px' }} />
                </Form.Item>
                <Form.Item name="date" rules={[{ required: true, message: 'Please select your date!' }]}>
                    <DatePicker style={{ width: '150px', height: '50px' }} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: '#FF6600', borderColor: '#FF6600', height: '50px', width: '100px', transition: 'background-color 0.3s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e85e02'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF6600'}>
                        Search
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SearchFlights;
