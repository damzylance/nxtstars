import React from "react";
import Layout from "../Layout";
import Infocard from "../Component/Infocard";
import { VStack, Text, HStack, Image, Button, Box } from "@chakra-ui/react";

function Home() {
  return (
    <Layout>
      <VStack align={"flex-start"} gap="50px" width={"full"}>
        <HStack
          width={"full"}
          gap="40px"
          borderRadius={"54px"}
          padding="10"
          background={"#E9F4D7"}
        >
          <VStack flex={1} gap="20px" alignItems="flex-start">
            <Text fontWeight={"bold"} fontSize={"3xl"}>
              <span style={{ color: "#80AE31", fontWeight: "900" }}>
                Nxtstars
              </span>{" "}
              unites aspiring football players and passionate supporters on a
              journey to greatness{" "}
            </Text>
            <HStack gap={"30px"} justifyContent={"space-between"}>
              <Button color={"#fff"} background="#80AE31">
                Get Started
              </Button>
              <Button
                color={"#80AE31"}
                background={"#fff"}
                border={"1px solid #80AE31"}
              >
                Learn More
              </Button>
            </HStack>
          </VStack>

          <Box
            display={"flex"}
            flex={2}
            width={"full"}
            justifyContent="flex-end"
          >
            <Image width={"530px"} src="/assets/images/heroimage2.png" />
          </Box>
        </HStack>
        <VStack width={"full"} gap={"50px"}>
          <Text fontWeight={700} fontSize="2xl">
            What We Do
          </Text>
          <HStack width={"full"} overflowX="scroll" gap={5}>
            <Infocard image="/assets/images/heroimage1.png" />
            <Infocard
              image="/assets/images/heroimage1.png"
              title="Unprcedented access to football"
              linkText="Back the future of football"
              buttonText="Investors"
            />
            <Infocard
              image="/assets/images/heroimage1.png"
              buttonText="Teams"
            />
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}

export default Home;
