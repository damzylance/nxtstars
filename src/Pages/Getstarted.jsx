import React from "react";
import { VStack, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

function Getstarted() {
  return (
    <Layout>
      <VStack
        height={"619px"}
        width={["100%", "100%", "70%"]}
        margin={"0 auto"}
        justifyContent={"center"}
        background={"#E9F4D7"}
        borderRadius={"8px"}
      >
        <Link to="https://d6pg2r1gfye.typeform.com/to/BcD78h1b">
          <Button background={"#80AE31"} size={"lg"} color={"#fff"}>
            Join Nxtstars
          </Button>
        </Link>

        <Text fontSize={"3xl"} fontWeight={900}>
          Nxtstars
        </Text>
        <Text fontSize={"2xl"}>Everyone deserves support</Text>
      </VStack>
    </Layout>
  );
}

export default Getstarted;
