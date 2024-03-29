import React from "react";
import { VStack, HStack, Image, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Infocard(props) {
  return (
    <VStack
      alignItems={"flex-start"}
      background={"#E9F4D7"}
      gap={"5px"}
      minW={["300px", "300px", "463px"]}
      padding={"18px 20px"}
      borderRadius={4}
      justifyContent={"space-between"}
      marginInlineStart={"0rem !important"}
    >
      <HStack
        borderRadius="4"
        width={"full"}
        flexDir={["column", "column", "row", "row"]}
        justifyContent="space-between"
        alignItems={"flex-start"}
      >
        <Image width={"203px"} src={props.image} />
        <Button background={"#80AE31"} color="#fff">
          {props.buttonText ? props.buttonText : "Players"}
        </Button>
      </HStack>

      <Text fontSize={"large"} fontWeight={"600"}>
        {props.title ? props.title : "Never compromise on your potential"}
      </Text>
      <Text height={"250px"}>
        {props.info
          ? props.info
          : " NexStars helps you achieve your full potentials. By creating a communityof backers, NxStars let you fund your career and offers a variety ofservices to help you deliver the best on-field performance"}
      </Text>
      <Link to={props.link}>
        <Text textDecoration={"underline"}>
          {props.linkText ? props.linkText : "Fund your Football journey"}
        </Text>
      </Link>
    </VStack>
  );
}

export default Infocard;
