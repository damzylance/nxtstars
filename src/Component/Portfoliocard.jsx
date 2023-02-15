import React from "react";
import { VStack, Avatar, Text, Button } from "@chakra-ui/react";

function Portfoliocard() {
  return (
    <VStack minW={"376px"} background={"#F7FBFD"} gap={"24px"} padding="20px">
      <Avatar size={"2xl"} src="" alt="Player" />
      <Text>Hi, I’m Rapheal, I’m a professional footballer</Text>
      <Button color={"#fff"} background={"#80AE31"}>
        View More
      </Button>
    </VStack>
  );
}

export default Portfoliocard;
