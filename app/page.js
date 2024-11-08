import React from 'react';
import Head from 'next/head';
import BookTicket from './components/BookTicket'; // Шлях до вашого компонента BookTicket

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 style={{ 
          textAlign: 'center', 
          marginTop: '20px', 
          fontFamily: 'Montserrat, sans-serif', 
          fontSize: '48px', 
          fontWeight: '700' 
        }}>
        Book Your Tickets Now!
      </h1>
      
      {/* Додаємо компонент BookTicket */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BookTicket />
      </div>
    </div>
  );
};

export default HomePage;