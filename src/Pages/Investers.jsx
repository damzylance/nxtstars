import React, { Fragment } from "react";
import Layout from "../Layout";
import Infocard from "../Component/Infocard";
import { VStack, Text, HStack, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const span = { color: "#80AE31", fontWeight: "900" };
function Investors() {
  return (
    <Layout>
      <VStack align={"flex-start"} gap="50px" width={"full"}>
        <HStack
          width={"full"}
          alignItems={"center"}
          flexDir={["column-reverse", "column-reverse", "row", "row"]}
          gap="40px"
          padding={10}
          borderRadius={"54px"}
          background={"#E9F4D7"}
        >
          <VStack flex={1} gap="20px" alignItems="flex-start">
            <Text fontWeight={"bold"} fontSize={"3xl"}>
              For the first time, <span style={span}>fund</span> football stars
              of tomorrow. Be part of the <span style={span}>journey</span>.
            </Text>
            <Text fontSize={"lg"}>
              Support aspiring football players to reach professional heights,
              and receive not just a portion of their earnings, but
              unprecedented access to the sport.
            </Text>
            <Button color={"#fff"} background="#80AE31">
              <Link to={"https://d6pg2r1gfye.typeform.com/to/BcD78h1b"}>
                Back Football Talent
              </Link>
            </Button>
          </VStack>

          <Image
            flex={2}
            width={"530px"}
            src="/assets/images/investorshero.png"
          />
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
              buttonText="The Struggle"
              title={
                <Fragment>
                  A core member of their team.
                  <br />
                  <span style={span}>
                    Support a player you believe in today. The journey to the
                    top is expensive
                  </span>
                </Fragment>
              }
              info={
                "Becoming a professional footballer as an African is daunting, expensive and unaffordable dream for most. Between expensive cost of proper academy training, quality kits, trial travels, including unchecked scammers, many aspiring football abandon the dream of going pro."
              }
              image="/assets/images/heroimage1.png"
              linkText="Visit blog to read more"
              link={"https://d6pg2r1gfye.typeform.com/to/BcD78h1b"}
            />
            <Infocard
              buttonText="Invest in Players"
              title={
                <Fragment>
                  The journey to the top is expensive
                  <br />
                  <span style={span}>
                    Back players today, split rewards tomorrow
                  </span>
                </Fragment>
              }
              info={
                "To back a player you believe in, you can fund them and get a portion of their future earning when they become professionals. More importantly, as a Nxstar investor, you are impacting the life of many youngsters by helping them fulfil their lifelong dream of becoming a football star. "
              }
              image="/assets/images/heroimage1.png"
              linkText="Support players"
              link={"https://d6pg2r1gfye.typeform.com/to/BcD78h1b"}
            />
            <Infocard
              buttonText="Access to all Players"
              title={
                <Fragment>
                  Back one player
                  <br />
                  <span style={span}>
                    Unlock automatic access to all of football today..
                  </span>
                </Fragment>
              }
              info={
                "As a Nexstar investor, you not don’t only have access to  your players, you have access to the entire pool of Nexstar talents. By backing only one player, you get the reward for backing such player and still have the opportunity to relate with all Nexstar players.   "
              }
              image="/assets/images/heroimage1.png"
              linkText="Explore benefits"
              link={"https://d6pg2r1gfye.typeform.com/to/BcD78h1b"}
            />
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}

export default Investors;
