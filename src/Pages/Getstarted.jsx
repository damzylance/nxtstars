import React from "react";
import { VStack, Button, Text } from "@chakra-ui/react";
import Layout from "../Layout";

function Getstarted() {
  return (
    <Layout>
      <VStack
        height={"619px"}
        width="70%"
        margin={"0 auto"}
        justifyContent={"center"}
        background={"#CEE6F3"}
        borderRadius={"8px"}
      >
        <Button background={"#3290C4"} size={"lg"} color={"#fff"}>
          Join Nxtstars
        </Button>
        <Text fontSize={"3xl"} fontWeight={900}>
          Nxtstars
        </Text>
        <Text fontSize={"2xl"}>Everyone deserves support</Text>
      </VStack>
    </Layout>
  );
}

export default Getstarted;
