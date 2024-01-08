import { Box,Text,Image,Heading,Button,Flex } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import img1 from "../assets/grilled-tomatoes-1-846x846 1.png"
import img2 from "../assets/meal-prep-ideas-846x846 1.png"
import img3 from "../assets/meal-prep-ideas-846x846 1 (1).png"
import img4 from "../assets/grilled-tomatoes-1-846x846 1 (1).png"
import img5 from "../assets/meal-prep-ideas-846x846 1 (2).png"
import img6 from "../assets/meal-prep-ideas-846x846 1 (3).png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";




const data=[
  {
    imageUrl: img1,
    heading: "Grilled  Tomatoes at Home"
  },
  {
    imageUrl: img2,
    heading: "Snacks for Travel"
  },{
    imageUrl: img3,
    heading: "Post-workout Recipes"
  },{
    imageUrl: img4,
    heading: "How To Grill Corn"
  },{
    imageUrl: img5,
    heading: "Crunchwrap Supreme"
  },{
    imageUrl: img6,
    heading: "Broccoli Cheese Soup"
  },
]
const BlogCard=({imageUrl, heading})=>{
  return(
    <Card  maxW="381px" border="2px" m="0" borderColor="rgba(147, 162, 211, 0.38)" borderRadius="21px">
    <CardBody>
      <Image m="27px" src={imageUrl} alt="card-img" borderRadius="21px"/>  
      <Flex margin="42px 40px" flexDirection={"column"} textAlign="left">
      <Heading fontWeight={700} fontSize={"21px"} lineHeight={"27px"} color={"#0E2368"}>{heading}</Heading>
      <Text marginTop="14px" fontWeight={400} fontSize={"15px"} lineHeight={"27px"} color="#444957">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</Text>
      <Button
          color="#424961"
          variant="outline"
          borderRadius="21px"
          padding="3px 26px"
          fontSize="16.44px"
          lineHeight="35.59px"
          fontWeight={600}
          marginRight={"164px"}
          marginTop={"27.41px"}
        >
          Read More
        </Button>
      </Flex>
    </CardBody>
  </Card>
  )
}
const Articles = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const slider = React.useRef(null);
  const [currentSlide, setCurrentSlide]=useState(1)
  return (
    <Box margin={"108px"} mt="158px" mb="64px">
      <Heading
      fontWeight={600}
      fontSize={"56px"}
      lineHeight={"42px"}
      color="#0E2368"
      mt="158px"
      mb="41px"
      >Latest Articles</Heading>
      <Slider  ref={slider} {...settings} >
      {data.map((card, index) => (
        <Box key={index}>
          <BlogCard {...card} />
        </Box>
      ))}
      </Slider>
      <Flex mt="64px" mb="65px" alignItems="center" justifyContent="center">
        <Button 
        borderRadius="5px"
        width={"28px"}
        height={"29px"}
        color="#AFAFAF"
        onClick={() => {
          slider?.current?.slickPrev()
          if(currentSlide==2) setCurrentSlide(1)}
          } ><FaChevronLeft/>
        </Button>
        <Text 
        color="#424961"
        fontWeight={400}
        fontSize="22px"
      lineHeight="27.22px"
      mx="14px"
        >{currentSlide}/2</Text>
        <Button 
        borderRadius="5px"
        width={"28px"}
        height={"29px"}
        color="#AFAFAF"
        onClick={() => { 
          slider?.current?.slickNext()
          if(currentSlide==1) setCurrentSlide(2)
        }}><FaChevronRight/>
        </Button>
      </Flex>
    </Box>
  )
}

export default Articles