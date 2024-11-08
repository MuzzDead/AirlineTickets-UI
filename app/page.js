import React from "react";
import Head from "next/head";
import FlightList from "./components/FlightList";
import BookTicket from "./components/BookTicket"; // Шлях до вашого компонента BookTicket
import PaymentForm from "./components/PaymentForm";
import SuccessMessage from "./components/SuccessMessage";

const HomePage = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "48px",
          fontWeight: "700",
        }}
      >
        Book Your Tickets Now!
      </h1>

      <div style={{ padding: "20px" }}>
        {/*<h1>Available Flights</h1>*/}
        {/*<FlightList /> { Додаємо компонент FlightList */}
        {/*<PaymentForm />*/}
        <SuccessMessage />
      </div>

      {/* Додаємо компонент BookTicket 
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BookTicket />
      </div>*/}
    </div>
  );
};

export default HomePage;
