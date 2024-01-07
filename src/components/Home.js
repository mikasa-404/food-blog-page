import React from "react";
import { Flex, Spacer, Box, Text, Image, Button, Heading } from "@chakra-ui/react";
import img1 from "../assets/Group 289.png";
import img2 from "../assets/Vector 1.png";
import img3 from "../assets/Screenshot_669 1.png"

const Home = () => {
  return (
    <Flex justify="space-between" textAlign={"left"}>
      <Box position="relative" marginLeft="100px" marginTop="33px" width="400px" >
        <Image
        src={img3}
        height="83px"
        width="107px"/>
        
        <Text marginTop="111px" textAlign="left" fontSize="62px" lineHeight="69px" fontWeight={700} padding={0} width="100%" color="#0E2368">Discover the {" "}
        <Text as="span" color="#E23744">Best</Text> Food and Drinks</Text>
        
        <Text marginTop="26px" fontWeight="400" fontSize="16.44px" lineHeight="27.41px" color="#444957">Naturally made Healthcare Products for the better care & support of your body.</Text>
        <Button color="white" backgroundColor="#E23744"variant="solid" borderRadius="34px"
        padding="14px 34px" 
        marginTop="41px"
        fontSize="16px"
        lineHeight="36px"
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
          height="805px"
          maxW="735px"
          margin={0}
        />
        <Image
          src={img2}
          alt="Overlay Image"
          width="762px"
          height="839px"
          position="absolute"
          top="0"
          right={0}
        />
        <Button color="#FFFFFF"  variant="outline" position="absolute" borderRadius="21px"
        padding="3px 20px" 
        top="32px"
        right="41px"
        fontSize="16px"
        lineHeight="36px"
        fontWeight={600}>
          Get in Touch
        </Button>
      </Box>
    </Flex>
  );
};

export default Home;
