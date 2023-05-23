import React from "react";
import { Navbar, Text } from "@nextui-org/react";

const NavbarComponent = () => {
  return (
    <Navbar
      css={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <Navbar.Brand>
        <Text size={18} weight="bold" color="white">
          My Website
        </Text>
      </Navbar.Brand>
      <Navbar.Collapse>
          <Navbar.Item>
            <Navbar.Link href="#">Pricing</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="#">Company</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="#">Features</Navbar.Link>
          </Navbar.Item>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
