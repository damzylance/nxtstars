import React from "react";
import { VStack, HStack, Text } from "@chakra-ui/react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <VStack
      borderTop={"1px solid #3290C4"}
      alignItems={"flex-start"}
      width="full"
      pt={"20px"}
    >
      <HStack
        px={"4"}
        alignItems={"flex-start"}
        width={"full"}
        justifyContent={"space-between"}
      >
        <Text fontSize={"lg"} fontWeight={"700"}>
          Get Started
        </Text>
        <VStack alignItems={"flex-start"} gap={"5px"}>
          <Text fontSize={"lg"} fontWeight={"700"}>
            Resources
          </Text>
          <Text>Players</Text>
          <Text>Investors</Text>
        </VStack>
      </HStack>
      <Text px={"4"} fontSize={"2xl"} fontWeight={"900"} color={"#3290C4"}>
        NxtStars
      </Text>
      <HStack
        justifyContent={"space-between"}
        width={"full"}
        background={"#CEE6F3"}
        px={"4"}
        py="6"
      >
        <HStack gap={"20px"} fontWeight="500">
          <Text fontWeight={"600"}>Terms of Use</Text>
          <Text fontWeight={"600"}>Privacy Policy</Text>
          <Text fontWeight={"600"}>Nxtstars Tech, inc.</Text>
        </HStack>
        <HStack>
          <BsFacebook fontSize={"24px"} />
          <BsInstagram fontSize={"24px"} />
          <BsTwitter fontSize={"24px"} />
        </HStack>
      </HStack>
    </VStack>
  );
}

export default Footer;
