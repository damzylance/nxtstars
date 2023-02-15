import React, { Fragment } from "react";
import Layout from "../Layout";
import Infocard from "../Component/Infocard";
import { VStack, Text, HStack, Image, Button } from "@chakra-ui/react";
const span = { color: "#80AE31", fontWeight: "900" };
function Investors() {
  return (
    <Layout>
      <VStack align={"flex-start"} gap="50px" width={"full"}>
        <HStack
          width={"full"}
          alignItems={"center"}
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
              Back Football Talent
            </Button>
          </VStack>

          <Image
            flex={2}
            width={"530px"}
            src="/assets/images/investorshero.png"
          />
        </HStack>
        <VStack width={"full"} gap={"10px"}>
          <HStack width={"full"} overflowX="scroll" gap={5} align>
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
              image="/assets/images/heroimage1.png"
              linkText="Visit blog to read more"
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
              image="/assets/images/heroimage1.png"
              linkText="Support players"
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
              image="/assets/images/heroimage1.png"
              linkText="Explore benefits"
            />
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}

export default Investors;
