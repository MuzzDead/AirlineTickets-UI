import React from "react";
import Head from "next/head";
import SearchFlights from "./components/SearchFlights";

const HomePage = () => {
  // Inline styles for centering
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh', // Full viewport height
    padding: '20px', // Optional padding
    boxSizing: 'border-box', // Include padding in height calculation
  };

  const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    fontSize: '32px',
    fontWeight: 'bold'
  };

  return (
    <>
      <Head>
        <title>Flight Search</title>
        <meta name="description" content="Search for flights" />
      </Head>
      <h1 style={titleStyle}> Book your Tickets Now!</h1>
      <div style={containerStyle}>
        <SearchFlights />
      </div>
    </>
  );
};

export default HomePage;