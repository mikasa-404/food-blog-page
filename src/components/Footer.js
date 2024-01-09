import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/Screenshot_669 2.png";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      bg={"#F8F8F8"}
      justifyContent="space-between"
      position="relative"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Image
        src={logo}
        alt="logo"
        w={{ base: "75px", md: "161px" }}
        h={{ base: "58px", md: "125px" }}
        mx={{ base: "auto", md: "0" }}
        mt={{ base: "52px", md: "123px" }}
        mb={{ md: "114px" }}
        ml={{ md: "103px" }}
      />
      <Flex
        m={{ base: "42px", md: "0" }}
        mt={{ md: "84px" }}
        mb={{ base: "29px", md: "92px" }}
        textAlign="left"
        w={{ base: "294px", md: "232px" }}
        flexDirection="column"
      >
        <Heading
          fontSize={{ base: "15.77px", md: "18.84px" }}
          fontWeight={600}
          lineHeight={{ base: "34px", md: "27.22px" }}
          color="#0E2368"
        >
          Contact Us
        </Heading>
        <Flex
          mt={{ md: "14px" }}
          fontSize={{ base: "8.76px", md: "14.66px" }}
          fontWeight={400}
          lineHeight={{ base: "12.27px", md: "23.03px" }}
          color="#646874"
          flexDirection="column"
        >
          <Text>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </Text>
          <Text mt="15px">example2020@gmail.com</Text>
          <Text mt="15px">(904) 443-0343</Text>
        </Flex>
      </Flex>
      <Flex
        m={{ base: "42px", md: "0" }}
        mt={{ md: "84px" }}
        mb={{ base: "30px", md: "92px" }}
        flexDirection="column"
      >
        <Heading
          fontSize={{ base: "15.77px", md: "18.84px" }}
          fontWeight={600}
          lineHeight={{ base: "35px", md: "27.22px" }}
          color="#0E2368"
        >
          More
        </Heading>
        <UnorderedList
          ml={0}
          fontSize={{ base: "8.76px", md: "14.66px" }}
          fontWeight={400}
          lineHeight={{ base: "35px", md: "23.03px" }}
          color="#646874"
          listStyleType="none"
        >
          <ListItem mt={{ md: "14px" }}>About Us</ListItem>
          <ListItem mt={{ md: "14px" }}>Products</ListItem>
          <ListItem mt={{ md: "14px" }}>Career</ListItem>
          <ListItem mt={{ md: "14px" }}>Contact Us</ListItem>
        </UnorderedList>
      </Flex>
      <Flex
        m={{ base: "42px", md: "0" }}
        mr={{ md: "103px" }}
        mt={{ base: "33px", md: "84px" }}
        flexDirection="column"
      >
        <Heading
          fontSize="18.84px"
          fontWeight={600}
          lineHeight={{ base: "35px", md: "27.22px" }}
          color="#0E2368"
          width="129px"
          display={{ base: "none", md: "block" }}
        >
          Social Links
        </Heading>
        <Flex
          color="#0E2368"
          m={"auto"}
          // justifyContent={{md:"space-between "}}
          ml={{md:"0"}}
          mt={{md:"11px"}}
          fontSize={{ base: "12px", md: "21px" }}
          gap={{base:"22px",md:"36px"}}
          mb={{base:"67px", md:"auto"}}
        >
          <FaInstagram />
          <FaTwitter />
          <FaFacebookF />
        </Flex>
      </Flex>
      <Box
        position="absolute"
        mx={{base:"auto",md:"0"}}
        alignSelf={"center"}
        bottom={{base:"119px",md:"92px"}}
        right={{md:"104px"}}
        color="#828B9C"
        fontSize={{ base: "8.76px", md: "14.66px" }}
        fontWeight={400}
        lineHeight={{ base: "35px", md: "23.03px" }}
        textAlign="center"
      >
        © 2022 Food Truck Example
      </Box>
    </Flex>
  );
};

export default Footer;
