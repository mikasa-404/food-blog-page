import { Box, Flex,Heading,Image,ListItem,Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/Screenshot_669 2.png"
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex bg={"#F8F8F8"} justifyContent="space-between" position="relative">
        <Image src={logo} alt="logo"
        w="161px"
        h="125px"
        mt="123px"
        mb="114px"
        ml="103px"/>
        <Flex
        mt="84px"
        mb="92px"
        textAlign="left"
        w="232px"
        flexDirection="column"
        >
            <Heading
            fontSize="18.84px"
            fontWeight={600}
            lineHeight="27.22px"
            color="#0E2368">Contact Us</Heading>
            <Flex
            mt="14px" 
            fontSize="14.66px"
            fontWeight={400}
            lineHeight={"23.03px"}
            color="#646874"
            flexDirection="column">
                <Text>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</Text>
                <Text mt="15px">example2020@gmail.com</Text>
                <Text mt="15px">(904) 443-0343</Text>
            </Flex>
        </Flex>
        <Flex mt="84px"
        mb="92px"
        flexDirection="column"
        >
          <Heading
          fontSize="18.84px"
          fontWeight={600}
          lineHeight="27.22px"
          color="#0E2368">More</Heading>
          <UnorderedList ml={0} 
            fontSize="15px"
            fontWeight={400}
            lineHeight={"27px"}
            color="#646874"
            listStyleType="none"            >
            <ListItem mt="14px">About Us</ListItem>
            <ListItem mt="14px">Products</ListItem>
            <ListItem mt="14px">Career
            </ListItem>
            <ListItem mt="14px">Contact Us</ListItem>
          </UnorderedList>
        </Flex>
        <Flex mr="103px" mt="84px"
        flexDirection="column">
          <Heading
          fontSize="18.84px"
          fontWeight={600}
          lineHeight={{base:"35px",md:"27.22px"}}
          color="#0E2368"
          width="129px"
          >Social Links</Heading>
          <Flex color="#0E2368" justifyContent="space-between " mt="11px">
            <FaInstagram size="21px"/>
            <FaTwitter size="21px"/>
            <FaFacebookF size="21px"/>
          </Flex>
        </Flex>
        <Box
        position="absolute"
        bottom="92px"
        right="104px"
        color="#828B9C"
        fontWeight={400}
        fontSize={"14.66px"}
        textAlign="center">© 2022 Food Truck Example</Box>
    </Flex>
  )
}

export default Footer