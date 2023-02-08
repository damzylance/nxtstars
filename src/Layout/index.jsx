import React from "react";
import Footer from "./Footer";
import { Box, Container } from "@chakra-ui/react";
import Nav from "./Nav";

function Layout(props) {
  return (
    <Container maxW={"80%"}>
      <Nav />
      <Box py={"50px"} width={"full"}>
        {props.children}
      </Box>
      <Footer />
    </Container>
  );
}

export default Layout;
