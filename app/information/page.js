import React from 'react';
import { Card, Divider } from 'antd';
import './InformationPage.css';

const InformationPage = () => {
  return (
    <div className="information-page">
      <h2>About Our Company</h2>
      <Card className="info-card">
        <p>
          We are a leading provider in [your industry] committed to delivering
          quality services and solutions. Our team of professionals strives to
          exceed customer expectations and provide innovative solutions.
        </p>
        <Divider />
        <h3>Our Mission</h3>
        <p>
          Our mission is to [describe your mission]. We work diligently to
          support our clients and create sustainable growth.
        </p>
        <Divider />
        <h3>Our Values</h3>
        <ul>
          <li>Integrity and Transparency</li>
          <li>Customer Focus</li>
          <li>Innovation and Excellence</li>
          <li>Teamwork and Respect</li>
        </ul>
      </Card>
    </div>
  );
};

export default InformationPage;
