import React from "react";
import Layout from "../Layout";
import Infocard from "../Component/Infocard";
import Portfoliocard from "../Component/Portfoliocard";
import { VStack, Text, HStack, Image, Button } from "@chakra-ui/react";
const span = { color: "#3290C4", fontWeight: "900" };
function Players() {
  return (
    <Layout>
      <VStack align={"flex-start"} gap="50px" width={"full"}>
        <HStack width={"full"} alignItems={"center"} gap="40px">
          <VStack flex={1} gap="20px" alignItems="flex-start">
            <Text fontWeight={"bold"} fontSize={"3xl"}>
              Fund your <span style={span}>pro career </span>from a community of{" "}
              <span style={span}>believers</span>. Achieve your potentials
            </Text>
            <Text>
              Fund your professional football career from a community of
              sponsors and take them along for the ride.{" "}
            </Text>
            <Button color={"#fff"} background="#3290C4">
              Get funded
            </Button>
          </VStack>

          <Image flex={2} width={"328px"} src="/assets/images/playerhero.png" />
        </HStack>
        <VStack width={"full"} gap={"10px"}>
          <HStack width={"full"} overflowX="scroll" gap={5} align>
            <Infocard
              buttonText="Funding"
              title={`We can help with funding so you can  focus on the game `}
              image="/assets/images/heroimage1.png"
            />
            <Infocard
              buttonText="Community"
              title={`Football does’nt have to be lonely. Lean on your community `}
              image="/assets/images/heroimage1.png"
            />
            <Infocard
              buttonText="Beyond Funding"
              title={`We offer services beyond funding `}
              image="/assets/images/heroimage1.png"
            />
          </HStack>
        </VStack>
        <VStack width={"full"} gap="50px" alignItems="flex-start">
          <Text fontSize={"3xl"} fontWeight={"700"}>
            Portfolios
          </Text>
          <HStack width={"full"} overflowX={"scroll"}>
            <Portfoliocard />
            <Portfoliocard />
            <Portfoliocard />
            <Portfoliocard />
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}

export default Players;
