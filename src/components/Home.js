import React from "react";
import {
  Flex,
  Spacer,
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

const Home = () => {
  return (
    <Box>
      <Flex justify="space-between" textAlign={"left"}>
        <Box
          position="relative"
          marginLeft="100px"
          marginTop="33px"
          width="400px"
        >
          <Image src={img3} height="83px" width="107px" />

          <Heading
            marginTop="111px"
            textAlign="left"
            fontSize="62px"
            lineHeight="69px"
            fontWeight={700}
            padding={0}
            width="100%"
            color="#0E2368"
          >
            Discover the{" "}
            <Text as="span" color="#E23744">
              Best
            </Text>{" "}
            Food and Drinks
          </Heading>

          <Text
            marginTop="26px"
            fontWeight="400"
            fontSize="16.44px"
            lineHeight="27.41px"
            color="#444957"
          >
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>
          <Button
            color="white"
            backgroundColor="#E23744"
            variant="solid"
            borderRadius="34px"
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
          <Button
            color="#FFFFFF"
            variant="outline"
            position="absolute"
            borderRadius="21px"
            padding="3px 20px"
            top="32px"
            right="41px"
            fontSize="16px"
            lineHeight="36px"
            fontWeight={600}
          >
            Get in Touch
          </Button>
        </Box>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        bgGradient="linear(to-r, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)"
        marginTop="186px"
      >
        <Image src={img4} height="468px" width="384px" marginLeft="205px" />
        <Flex
          flexDirection="column"
          marginRight="205px"
          marginX="107px"
          marginLeft="200px"
          width="447px"
          textAlign={"left"}
        >
          <Text
            fontSize="45px"
            lineHeight="27px"
            fontWeight={600}
            padding={0}
            color="#0E2368"
          >
            About Us
          </Text>
          <Text
            fontSize="15px"
            fontWeight="400"
            lineHeight="27px"
            marginTop="27.41px"
            color="#444957"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <Button
            color="white"
            backgroundColor="#E23744"
            variant="solid"
            borderRadius="21px"
            padding="3px 26px"
            marginTop="21px"
            fontSize="16px"
            lineHeight="36px"
            fontWeight={600}
            width={"132px"}
          >
            Read More
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
