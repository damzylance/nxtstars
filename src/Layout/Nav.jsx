import React from "react";
import { HStack, Text, Button, Image, Box, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1, RxCaretRight } from "react-icons/rx";
import { useState } from "react";
function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const showMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Box
        width={"full"}
        top={0}
        left={0}
        bg={"#fff"}
        borderBottom={"1px solid #eae8e8"}
        py={"10px"}
        position={"sticky"}
        zIndex={1}
        display={["block", "block", "none"]}
      >
        <HStack justifyContent={"space-between"} alignItems="center">
          <Link to={"/"}>
            <Image src="assets/images/nxstarslogo.png" width={"100px"} />
          </Link>
          {openMenu ? (
            <RxCross1 onClick={showMobileMenu} fontSize={"24px"} />
          ) : (
            <RxHamburgerMenu onClick={showMobileMenu} fontSize={"24px"} />
          )}
        </HStack>
        {openMenu && (
          <VStack
            width={"full"}
            alignItems={"flex-start"}
            mt="20px"
            justifyContent={"space-between"}
            height="200px"
          >
            <VStack width={"full"} alignItems={"flex-start"}>
              <Link to={"/players"} style={{ width: "100%" }}>
                <HStack
                  width={"full"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  py={"10px"}
                  borderBottom={"1px solid #eae8e8"}
                >
                  <Text fontWeight={"500"} fontSize={"lg"}>
                    Players
                  </Text>
                  <RxCaretRight fontSize={"24px"} />
                </HStack>
              </Link>
              <Link to={"/investors"} style={{ width: "100%" }}>
                <HStack
                  width={"full"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  py={"10px"}
                  borderBottom={"1px solid #eae8e8"}
                >
                  <Text fontWeight={"500"} fontSize={"lg"}>
                    Investors
                  </Text>
                  <RxCaretRight fontSize={"24px"} />
                </HStack>
              </Link>
            </VStack>

            <Button width={"full"} background={"#80AE31"} color="#fff">
              Get Started
            </Button>
          </VStack>
        )}
      </Box>

      <HStack
        display={["none", "none", "flex", "flex"]}
        py={"10px"}
        width={"full"}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottom={"1px solid #80AE31"}
      >
        <Link to={"/"}>
          <Box>
            {" "}
            <Image src="assets/images/nxstarslogo.png" width={"100px"} />
          </Box>
        </Link>

        <HStack gap={"30px"}>
          <Link to="/players">
            <Text fontWeight={600}>Players</Text>
          </Link>
          <Link to="/investors">
            <Text fontWeight={600}>Investors</Text>
          </Link>
          <Link to="">
            <Text fontWeight={600}>Blog</Text>
          </Link>
        </HStack>
        <Link to="/get-started">
          <Button background={"#80AE31"} color="#fff">
            Get Started
          </Button>
        </Link>
      </HStack>
    </>
  );
}

export default Nav;
