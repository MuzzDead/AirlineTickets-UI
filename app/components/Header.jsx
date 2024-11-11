import React from "react";
import { Layout, Button } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";

const { Header } = Layout;

const HeaderComponent = () => {
  const router = useRouter();

  const contact = () => {
    router.push("/contacts");
  };

  const information = () => {
    router.push("/information");
  };

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
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div
          style={{
            color: "white",
            fontSize: "24px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          AirlineTickets
        </div>
      </Link>
      <div>
        {/* Uncomment this button if you want to enable the Contacts button */}
        {/* <Button
          type="link"
          onClick={contact}
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Montserrat, sans-serif",
            height: "50px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0b84de")
          } // Change color on hover
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0D92F4")
          } // Revert color on mouse leave
        >
          Contacts
        </Button> */}
        <Button
          type="link"
          onClick={information}
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Montserrat, sans-serif",
            height: "50px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#0b84de")
          } // Change color on hover
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0D92F4")
          } // Revert color on mouse leave
        >
          Information
        </Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;