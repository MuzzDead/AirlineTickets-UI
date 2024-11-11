'use client';
import React from 'react';
import { Form, Input, Button, DatePicker, message } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './PaymentForm.css';

const PaymentForm = () => {
  const router = useRouter(); // Ініціалізація useRouter для навігації

  const onFinish = async (values) => {
    try {
      // Перетворення дати на формат MM/YY
      const expirationDate = values.expiryDate.format('MM/YY');
      
      // Формуємо об’єкт для API
      const paymentData = {
        cardNumber: values.cardNumber,
        expirationDate,
        cvv: values.cvv,
        phoneNumber: values.phoneNumber,
      };

      // Надсилаємо запит на сервер
      const response = await axios.post('https://localhost:7025/api/Payment', paymentData);

      if (response.status === 200) {
        message.success(response.data); // Виводимо повідомлення про успішну оплату
        router.push('/success'); // Перенаправлення на сторінку успіху
      }
    } catch (error) {
      message.error(
        error.response?.data || 'Something is wrong! Please, try again later!'
      );
    }
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
              format="MM/YY"
              placeholder="MM/YY"
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
