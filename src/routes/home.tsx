import React from "react";
import { Container, Text, Grid, Col, Button } from "@nextui-org/react";
import NavbarComponent from ".././components/navbar";

export const Home = () => {
  return (
    <Container
      fluid
      css={{
        backgroundColor: "black",
        padding: 5,
        margin: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        }}
    > 
      <Text h1>Start your company</Text>
      <Text h1>with AI</Text>
      <Button
        size="md"
        css={{ width: "30%", marginTop: "10px", justifyContent: "center", alignItems: "center" }}
      >
        Get Started
      </Button>
    </Container>
  );
};
