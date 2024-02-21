import React from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import img1 from "../assets/Group 289.png";
import img2 from "../assets/Vector 1.png";
import img3 from "../assets/Screenshot_669 1.png";
import img4 from "../assets/girl (lp).png";
import "@fontsource/poppins";

const Home = () => {
  return (
    <Box>
      <Flex
        flexDirection={{ base: "column-reverse", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
        justifyContent={{ base: "start", md: "space-between" }}
      >
        <Box
          position="relative"
          margin={0}
          marginLeft={{ md: "6.25em" }}
          marginX={{ base: "auto" }}
          marginTop={{ base: "3.94em", md: "2.06em" }}
          width={{ base: "15em", md: "25em" }}
        >
          <Image
            src={img3}
            height="83px"
            width="107px"
            display={{ base: "none", md: "block" }}
          />

          <Heading
            marginTop={{ base: "75px", md: "111px" }}
            fontSize={{ base: "2.38rem", md: "3.88rem" }}
            lineHeight={{ base: "2.88rem", md: "4.31rem" }}
            fontWeight={700}
            padding={0}
            width="100%"
            color="#0E2368"
            fontFamily={""}
          >
            Discover the{" "}
            <Text as="span" color="#E23744">
              Best
            </Text>{" "}
            Drinksssss!!!

          </Heading>

          <Text
            marginTop={{ base: "1.31em", md: "1.69em" }}
            fontWeight="400"
            fontSize={{ base: "0.7rem", md: "1.03rem" }}
            lineHeight={{ base: "1.31em", md: "1.69em" }}
            color="#444957"
          >
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>
          <Button
            color="white"
            backgroundColor="#E23744"
            variant="solid"
            borderRadius={{ base: "1.88em", md: "2.13em" }}
            padding={{ base: "0.75em 1.88em", md: "0.88em 2.13em" }}
            marginTop={{ base: "1.75em", md: "2.56em" }}
            fontSize={{ base: "0.77rem", md: "1.13rem" }}
            lineHeight={{ base: "2em", md: "2.25em" }}
            fontWeight={600}
          >
            Explore Now
          </Button>
        </Box>

        {/* Right side with image */}
        <Box>
          <Image
            src={img1}
            alt="food-bg"
            width={{ base: "23.63em", md: "45.94em" }}
            height={{ base: "25.88em", md: "50.25em" }}
            margin={0}
          />
          <Image
            src={img2}
            alt="Overlay Image"
            width={{ base: "23.44em", md: "47.63em" }}
            height={{ base: "26.63em", md: "52.44em" }}
            position="absolute"
            top="0"
            right={0}
          />
          <Button
            color="#FFFFFF"
            variant="outline"
            position="absolute"
            borderRadius={{ base: "1.31rem" }}
            padding={{ base: "0.25em 2.06em", md: "0.19em 1.25em" }}
            top={{ base: "1.13em", md: "2em" }}
            right={{ base: "1.16em", md: "2.56em" }}
            fontSize={{ base: "0.69em", md: "1rem" }}
            lineHeight={{ base: "2.88em", md: "2.25rem" }}
            fontWeight={600}
          >
            Get in Touch
          </Button>
        </Box>
      </Flex>

      {/* about section */}
      <Flex
        align="center"
        justify="space-between"
        bgGradient="linear(to-r, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)"
        marginTop={{ base: "4em", md: "11.63em" }}
        height={{base:"516px",md:"467px"}}
      >
        <Image
          src={img4}
          height="468px"
          width="384px"
          marginLeft="12.81em"
          display={{ base: "none", md: "block" }}
        />
        <Flex
          flexDirection="column"
          marginX={{base:"3.13em"}}
          marginLeft={{md:"12.5em"}}
          marginRight={{md:"12.75em"}}
          my={{base:"8.75em", md:"6.69em"}}
          width={{base:"100%",md:"27.94em"}}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{base:"1.63rem",md:"2.81rem"}}
            lineHeight={{base:"2.19em",md:"1.69em"}}
            fontWeight={600}
            padding={0}
            color="#0E2368"
          >
            About Us
          </Text>
          <Text
            fontSize={{base:"0.69rem", md:"15px"}}
            fontWeight="400"
            lineHeight={{base:"21px",md:"27px"}}
            my={"21px"}
            marginTop={{base:"1.31em",md:"27.41px"}}
            color="#444957"
            fontFamily={"Open Sans"}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <Button
            margin={"auto"}
            ml={{md:"0"}}
            color="white"
            backgroundColor="#E23744"
            variant="solid"
            borderRadius={{base:"1.69em",md:"1.31em"}}
            padding={{md:"0.19em 1.63em"}}
            marginTop={{base:"1em",md:"21px"}}
            fontSize={{base:"0.69rem", md:"1rem"}}
            lineHeight="36px"
            fontWeight={600}
            width={{base:"96px",md:"132px"}}
          >
            Read More
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
