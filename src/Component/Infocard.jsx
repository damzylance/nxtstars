import React from "react";
import { VStack, Box, Image, Button, Text } from "@chakra-ui/react";

function Infocard(props) {
  return (
    <VStack
      alignItems={"flex-start"}
      background={"#E9F4D7"}
      gap={"5px"}
      minW="463px"
      padding={"18px 20px"}
      borderRadius={4}
      justifyContent="space-between"
    >
      <Box
        background={"#fff"}
        borderRadius="4"
        width={"full"}
        textAlign="center"
      >
        <Image width={"203px"} src={props.image} margin="0 auto" />
      </Box>
      <Button background={"#80AE31"} color="#fff">
        {props.buttonText ? props.buttonText : "Players"}{" "}
      </Button>
      <Text fontSize={"large"} fontWeight={"600"}>
        {props.title ? props.title : "Never compromise on your potential"}
      </Text>
      <Text>
        {props.info
          ? props.info
          : " Moonshot helps you achieve your full potentials. By creating a communityof backers, Nxtstars let you fund your career and offers a variety ofservices to help you deliver the best on-field performance"}
      </Text>
      <Text textDecoration={"underline"}>
        {props.linkText ? props.linkText : "Fund your Football journey"}
      </Text>
    </VStack>
  );
}

export default Infocard;
