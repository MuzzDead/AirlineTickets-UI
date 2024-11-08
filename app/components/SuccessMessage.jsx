'use client';
import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd'; // Importing Button from Ant Design
import './SuccessMessage.css'; // Import CSS for styling

const SuccessMessage = ({ onReturn }) => {
  return (
    <div className="success-message-container">
      <div className="content">
        <CheckCircleOutlined className="success-icon" />
        <h2>Payment Successful!</h2>
        <p>Your transaction has been completed successfully. A ticket will be sent to your email address.</p>
      </div>
      <Button type="primary" className="return-button" onClick={onReturn}>
        Return to Main Menu
      </Button>
    </div>
  );
};

export default SuccessMessage;