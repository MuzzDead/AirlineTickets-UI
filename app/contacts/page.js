"use client";
import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import './ContactPage.css';

const ContactPage = () => {
  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us with any questions or feedback!</p>
      <Card className="contact-card">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input placeholder="Your Email" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Please enter your message!' }]}
          >
            <Input.TextArea placeholder="Your Message" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ContactPage;
