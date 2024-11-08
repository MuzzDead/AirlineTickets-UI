"use client";

import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Checkbox, Button, Card, Row, Col } from "antd";

const { Option } = Select;

const BookTicket = () => {
  const [passengerData, setPassengerData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthday: null,
    nationality: "",
    email: "",
    phoneNumber: "",
  });

  const [luggage, setLuggage] = useState(false);
  const [seat, setSeat] = useState({ column: "", row: "" });

  const handlePassengerChange = (name, value) => {
    setPassengerData({ ...passengerData, [name]: value });
  };

  const handleSeatChange = (name, value) => {
    setSeat({ ...seat, [name]: value });
  };

  const handleSubmit = (values) => {
    console.log({ ...passengerData, luggage, seat });
  };

  return (
    <Form onFinish={handleSubmit} style={{ maxWidth: '800px', margin: 'auto' }}>
      <Card title="Passenger Information" style={{ marginBottom: '20px', width: '100%' }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input onChange={(e) => handlePassengerChange('firstName', e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input onChange={(e) => handlePassengerChange('lastName', e.target.value)} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: 'Please select your gender!' }]}
            >
              <Select onChange={(value) => handlePassengerChange('gender', value)}>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Birthday"
              name="birthday"
              rules={[{ required: true, message: 'Please select your birthday!' }]}
            >
              <DatePicker style={{ width: '100%' }} onChange={(date, dateString) => handlePassengerChange('birthday', dateString)} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input type="email" onChange={(e) => handlePassengerChange('email', e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              // Змінили правило, щоб поле не було обов'язковим
              rules={[{ required: false, message: 'Please input your phone number!' }]}
            >
              <Input type="tel" onChange={(e) => handlePassengerChange('phoneNumber', e.target.value)} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Nationality"
              name="nationality"
              rules={[{ required: true, message: 'Please input your nationality!' }]}
            >
              <Input onChange={(e) => handlePassengerChange('nationality', e.target.value)} />
            </Form.Item>
          </Col>
        </Row>
      </Card>

      <Card title="Seat Selection" style={{ marginBottom: '20px', width: '100%' }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Column (A, B, C ...)"
              name="column"
              rules={[{ required: true, message: 'Please select a column!' }]}
            >
              <Select onChange={(value) => handleSeatChange('column', value)}>
                {["A", "B", "C", "D", "E", "F"].map((col) => (
                  <Option key={col} value={col}>
                    {col}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Row (1, 2, 3...)"
              name="row"
              rules={[{ required: true, message: 'Please select a row!' }]}
            >
              <Select onChange={(value) => handleSeatChange('row', value)}>
                {Array.from({ length: 30 }, (_, i) => i + 1).map((row) => (
                  <Option key={row} value={row}>
                    {row}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Checkbox checked={luggage} onChange={() => setLuggage(!luggage)}>
            Add baggage(+20% price)
          </Checkbox>
        </Form.Item>
      </Card>

      <Form.Item style={{ textAlign: 'center' }}>
        <Button 
          type="default" 
          style={{ 
            height: '50px', 
            width: '100px', 
            marginRight: '10px' 
          }}
        >
          Cancel
        </Button>
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
          Confirm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookTicket;