'use client';
import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import './PaymentForm.css'; // Importing CSS for styling

const PaymentForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="payment-form-container">
      <h2 className='headTitle'>Payment</h2>
      <Form
        name="payment"
        onFinish={onFinish}
        layout="vertical"
        className="payment-form"
      >
        <Form.Item
          label="Card Number"
          name="cardNumber"
          rules={[{ required: true, message: 'Please enter the card number!' }]}
        >
          <Input placeholder="XXXX XXXX XXXX XXXX" maxLength={16} className="input-field" />
        </Form.Item>

        <div className="expiry-cvv-container">
          <Form.Item
            label="Valid Until"
            name="expiryDate"
            rules={[{ required: true, message: 'Please select the expiration date!' }]}
            className="expiry-item"
          >
            <DatePicker
              picker="month"
              format="MM/YYYY"
              placeholder="MM/YYYY"
              className="input-field"
            />
          </Form.Item>

          <Form.Item
            label="CVV Code"
            name="cvv"
            rules={[{ required: true, message: 'Please enter the CVV code!' }]}
            className="cvv-item"
          >
            <Input placeholder="XXX" maxLength={3} className="input-field" />
          </Form.Item>
        </div>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[{ required: true, message: 'Please enter the phone number!' }]}
        >
          <Input placeholder="(XXX) XXX-XXXX" maxLength={13} className="input-field" />
        </Form.Item>

        <Form.Item>
          <Button type="default" className="cancel-button">
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" className="submit-button">
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PaymentForm;