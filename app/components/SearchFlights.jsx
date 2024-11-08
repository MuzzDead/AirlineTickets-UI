'use client';
import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';

const SearchFlights = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Тут ви можете зробити запит до вашого API для пошуку авіаквитків
    };

    return (
        <div style={{ 
            width: '70%',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column', 
            marginTop: '-100px',
            border: '1px solid #ccc', // Рамка
            borderRadius: '8px', // Закруглені кути
            padding: '50px', // Відступи всередині рамки
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' // Тінь
        }}>
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
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        style={{ 
                            backgroundColor: '#FF6600', 
                            borderColor: '#FF6600', 
                            height: '50px', 
                            width: '100px',
                            transition: 'background-color 0.3s ease' // Анімація переходу
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e85e02'} // Зміна кольору при наведенні
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF6600'} // Повернення кольору при виході
                    >
                        Search
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SearchFlights;