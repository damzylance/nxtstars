import React from "react";
import { HStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <HStack
      py={"10px"}
      width={"full"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom={"1px solid #3290C4"}
    >
      <Link to={"/"}>
        <Text fontSize={"2xl"} fontWeight={"900"} color={"#3290C4"}>
          NxtStars
        </Text>
      </Link>
      <HStack gap={"30px"}>
        <Link to="/players">
          <Text fontWeight={600}>Players</Text>
        </Link>
        <Link to="/investors">
          <Text fontWeight={600}>Investors</Text>
        </Link>
        <Link to="/Blog">
          <Text fontWeight={600}>Blog</Text>
        </Link>
      </HStack>
      <Link to="/get-started">
        <Button background={"#3290C4"} color="#fff">
          Get Started
        </Button>
      </Link>
    </HStack>
  );
}

export default Nav;
