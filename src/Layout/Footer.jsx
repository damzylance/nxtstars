import React from "react";
import { VStack, HStack, Text } from "@chakra-ui/react";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <VStack
      borderTop={"1px solid #80AE31"}
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
          <Link to="https://d6pg2r1gfye.typeform.com/to/BcD78h1b">
            Get Started
          </Link>
        </Text>
        <VStack alignItems={"flex-start"} gap={"5px"}>
          <Text fontSize={"lg"} fontWeight={"700"}>
            Resources
          </Text>
          <Link to={"/players"}>
            <Text>Players</Text>
          </Link>
          <Link to={"/investors"}>
            <Text>Investors</Text>
          </Link>
        </VStack>
      </HStack>
      <Text px={"4"} fontSize={"2xl"} fontWeight={"900"} color={"#80AE31"}>
        NxtStars
      </Text>
      <HStack
        justifyContent={"space-between"}
        width={"full"}
        background={"#E9F4D7"}
        px={"4"}
        py="6"
      >
        <HStack
          flexDir={["column", "column", "row"]}
          alignItems={["flex-start"]}
          gap={"20px"}
          fontWeight="500"
        >
          <Text fontWeight={"600"}>Terms of Use</Text>
          <Text fontWeight={"600"}>Privacy Policy</Text>
          <Text fontWeight={"600"}>Nxtstars Tech, inc.</Text>
        </HStack>
        <HStack>
          <Link to={"https://www.youtube.com/thenexstars"}>
            <BsYoutube fontSize={"24px"} />
          </Link>

          <Link to={"https://www.instagram.com/thenxstars/"}>
            <BsInstagram fontSize={"24px"} />
          </Link>
          <Link to={"https://twitter.com/TheNxstars"}>
            <BsTwitter fontSize={"24px"} />
          </Link>
        </HStack>
      </HStack>
    </VStack>
  );
}

export default Footer;
