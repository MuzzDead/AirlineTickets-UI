import React from "react";
import { Layout, Menu, Button } from "antd";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header
      style={{
        backgroundColor: "#0D92F4",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 50px",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "24px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        AirlineTickets
      </div>
      <div>
        <Button
          type="link"
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Montserrat, sans-serif",
            height: "50px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0b84de")
          } // Зміна кольору при наведенні
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0D92F4")
          } // Повернення кольору при виході
        >
          Contacts
        </Button>
        <Button
          type="link"
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Montserrat, sans-serif",
            height: "50px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0b84de")
          } // Зміна кольору при наведенні
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0D92F4")
          } // Повернення кольору при виході
        >
          Information
        </Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
