'use client';
import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import './SuccessMessage.css';

const SuccessMessage = () => {
  const router = useRouter();

  const handleReturnToMain = () => {
    router.push('/'); // Переходить на головну сторінку
  };

  return (
    <div className="success-message-container">
      <div className="content">
        <CheckCircleOutlined className="success-icon" />
        <h2>Payment Successful!</h2>
        <p>Your transaction has been completed successfully. A ticket will be sent to your email address.</p>
      </div>
      <Button type="primary" className="return-button" onClick={handleReturnToMain}>
        Return to Main Menu
      </Button>
    </div>
  );
};

export default SuccessMessage;
