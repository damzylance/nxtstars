import React from "react";
import Layout from "../Layout";
import Infocard from "../Component/Infocard";
import { VStack, Text, HStack, Image, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Layout>
      <VStack align={"flex-start"} gap="50px" width={"full"}>
        <HStack
          width={"full"}
          flexDir={["column-reverse", "column-reverse", "row", "row"]}
          gap="40px"
          borderRadius={"54px"}
          padding="10"
          background={"#E9F4D7"}
        >
          <VStack flex={1} gap="20px" alignItems="flex-start">
            <Text fontWeight={"bold"} fontSize={["2xl", "2xl", "2xl", "3xl"]}>
              <span style={{ color: "#80AE31", fontWeight: "900" }}>
                Nxtstars
              </span>{" "}
              unites aspiring football players and passionate supporters on a
              journey to greatness{" "}
            </Text>
            <HStack gap={"30px"} justifyContent={"space-between"}>
              <Button color={"#fff"} background="#80AE31">
                <Link to={"https://d6pg2r1gfye.typeform.com/to/BcD78h1b"}>
                  Get Started
                </Link>
              </Button>
              <Button
                color={"#80AE31"}
                background={"#fff"}
                border={"1px solid #80AE31"}
              >
                <Link to={"/investors"}>Learn More</Link>
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
          <HStack
            width={"full"}
            overflowX="scroll"
            flexDir={["column", "column", "row", "row"]}
            gap={"30px"}
          >
            <Infocard image="/assets/images/heroimage1.png" link={"/players"} />
            <Infocard
              image="/assets/images/heroimage1.png"
              title="Unprcedented access to football"
              linkText="Back the future of football"
              buttonText="Investors"
              info={
                "Nxstars gives you the opportunity to join the team of a future Messi or Ronaldo. Back some of the best aspiring football talents and share in the rewards and excitement of their climb to the top of their career."
              }
              link={"/investors"}
            />
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}

export default Home;
