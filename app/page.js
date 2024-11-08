import React from "react";
import Head from "next/head";
import SearchFlights from "./components/SearchFlights";

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
          marginTop: '40px', 
          fontFamily: 'Montserrat, sans-serif', // Встановлюємо шрифт
          fontSize: '48px', // Збільшуємо розмір шрифту
          fontWeight: '700' // Змінюємо товщину шрифту
        }}>
        Book Your Tickets Now!
      </h1>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SearchFlights />
      </div>
    </div>
  );
};

export default HomePage;