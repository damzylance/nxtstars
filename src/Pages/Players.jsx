import React from "react";
import Layout from "../Layout";
import Infocard from "../Component/Infocard";
import Portfoliocard from "../Component/Portfoliocard";
import { VStack, Text, HStack, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const span = { color: "#80AE31", fontWeight: "900" };
function Players() {
  return (
    <Layout>
      <VStack align={"flex-start"} gap="50px" width={"full"}>
        <HStack
          width={"full"}
          alignItems={"center"}
          flexDir={["column-reverse", "column-reverse", "row", "row"]}
          borderRadius={"54px"}
          gap="40px"
          padding="10"
          background={"#E9F4D7"}
        >
          <VStack flex={1} gap="20px" alignItems="flex-start">
            <Text fontWeight={"bold"} fontSize={["2xl", "2xl", "2xl", "3xl"]}>
              Fund your <span style={span}>pro career </span>from a community of{" "}
              <span style={span}>believers</span>. Achieve your potentials
            </Text>
            <Text>
              Fund your professional football career from a community of
              sponsors and take them along for the ride.{" "}
            </Text>
            <Button color={"#fff"} background="#80AE31">
              <Link to={"https://d6pg2r1gfye.typeform.com/to/BcD78h1b"}>
                Get funded
              </Link>
            </Button>
          </VStack>

          <Image flex={2} width={"328px"} src="/assets/images/heroimage2.png" />
        </HStack>
        <VStack width={"full"} gap={"10px"}>
          <HStack
            width={"full"}
            overflowX="scroll"
            flexDir={["column", "column", "row", "row"]}
            gap={5}
            align
          >
            <Infocard
              buttonText="Funding"
              title={`We can help with funding so you can  focus on the game `}
              image="/assets/images/heroimage1.png"
              info={
                "Nxstars lets you fund your football carreer from a community of backers who believe in your potential and want to join you on your journey. The funding can be used to cover all football-related expenses so you can just focus on your game.For their support, you'll share a small portion of your future earnings for a defined period of time with your backers. Our terms are player-friendly first and foremost. Your accomplishment on pitch is yours and so is the reward."
              }
              link="https://d6pg2r1gfye.typeform.com/to/BcD78h1b"
            />

            <Infocard
              buttonText="Community"
              title={`Football does’nt have to be lonely. Lean on your community `}
              image="/assets/images/heroimage1.png"
              info={
                "Through the ups and downs, your backers are part of your team; you're never going on this journey alone. Lean on your backers off-field as well. They have a wealth of experience in different fields, can help act as a sounding board for whatever it is you are considering."
              }
              link={"https://d6pg2r1gfye.typeform.com/to/BcD78h1b"}
              linkText="Find your community"
            />
            <Infocard
              buttonText="Beyond Funding"
              title={`We offer services beyond funding `}
              image="/assets/images/heroimage1.png"
              info={
                "You don't just get funding as a Nexstar player, you will also have access to great deal of exclusive and topnotch resources, like physical and mental health services, discount on kits from brands, that are required to make you stand out among the crowd and ensure success on and off the pitch."
              }
              linkText={"Access our exlusive offers"}
              link={"https://d6pg2r1gfye.typeform.com/to/BcD78h1b"}
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
