import { Box, Text, Image, Heading, Button, Flex } from "@chakra-ui/react";
import {
  Card,
  CardBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import img1 from "../assets/grilled-tomatoes-1-846x846 1.png";
import img2 from "../assets/meal-prep-ideas-846x846 1.png";
import img3 from "../assets/meal-prep-ideas-846x846 1 (1).png";
import img4 from "../assets/grilled-tomatoes-1-846x846 1 (1).png";
import img5 from "../assets/meal-prep-ideas-846x846 1 (2).png";
import img6 from "../assets/meal-prep-ideas-846x846 1 (3).png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { useBreakpointValue } from "@chakra-ui/react";

const data = [
  {
    imageUrl: img1,
    heading: "Grilled  Tomatoes at Home",
  },
  {
    imageUrl: img2,
    heading: "Snacks for Travel",
  },
  {
    imageUrl: img3,
    heading: "Post-workout Recipes",
  },
  {
    imageUrl: img4,
    heading: "How To Grill Corn",
  },
  {
    imageUrl: img5,
    heading: "Crunchwrap Supreme",
  },
  {
    imageUrl: img6,
    heading: "Broccoli Cheese Soup",
  },
];
const BlogCard = ({ imageUrl, heading }) => {
  const data = useBreakpointValue({
    md: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    base: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
  });
  return (
    <Card
      maxW={{ base: "271px", md: "381px" }}
      border={{base:"1px", md:"2px"}}
      borderColor={{ base: "#373737", md: "rgba(147, 162, 211, 0.38)" }}
      borderRadius={{ base: "27px", md: "21px" }}
      mb={{base:"31px",md:"0"}}
    >
      <CardBody>
        <Image
          mx={"auto"}
          my={{ base: "33px", md: "27px" }}

          src={imageUrl}
          alt="card-img"
          borderRadius={{ base: "27px", md: "21px" }}
          width={{ base: "204px", md: "326px" }}
        />
        <Flex
          margin={{ base: "39px 20px", md: "42px 40px" }}
          flexDirection={"column"}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "16px", md: "21px" }}
            lineHeight={{ base: "35px", md: "27px" }}
            color={"#0E2368"}
          >
            {heading}
          </Heading>
          <Text
            marginTop={{ base: "6px", md: "14px" }}
            fontWeight={400}
            fontSize={{ base: "12px", md: "15px" }}
            lineHeight={{ base: "22px", md: "27px" }}
            color="#444957"
          >
            {data}
          </Text>
          <Button
            margin={"auto"}
            color={{ base: "#373737", md: "#424961" }}
            variant="outline"
            borderRadius={{ base: "27px", md: "21px" }}
            padding={{ base: "4px 33px", md: "3px 26px" }}
            fontSize={{ base: "11px", md: "16.44px" }}
            lineHeight={{ base: "46px", md: "35.59px" }}
            fontWeight={600}
            marginRight={{ md: "164px" }}
            marginTop={{ base: "26px", md: "27.41px" }}
            width={{ base: "118px" }}
          >
            Read More
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

const Articles = () => {

  const slider = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const navBtn = () => {
    return (
      <Flex mt={{base:"21px",md:"64px"}} alignItems="center" justifyContent="center">
        <Button
          borderRadius="5px"
          width={{base:"16px",md:"28px"}}
          height={{base:"16px",md:"28px"}}
          color="#AFAFAF"
          onClick={() => {
            slider?.current?.slickPrev();
            if (currentSlide === 2) setCurrentSlide(1);
          }}
        >
          <FaChevronLeft />
        </Button>
        <Text
          color="#424961"
          fontWeight={400}
          fontSize={{base:"12px",md:"22px"}}
          lineHeight="27.22px"
          mx={{base:"5px",md:"14px"}}
        >
          {currentSlide}/2
        </Text>
        <Button
          borderRadius="5px"
          width={{base:"16px",md:"28px"}}
          height={{base:"16px",md:"28px"}}
          color="#AFAFAF"
          onClick={() => {
            slider?.current?.slickNext();
            if (currentSlide === 1) setCurrentSlide(2);
          }}
        >
          <FaChevronRight />
        </Button>
      </Flex>
    );
  };
  const mediumSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const baseSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 3,
  };
  const settings = useBreakpointValue({
    base: baseSettings,
    md: mediumSettings,
  });

  return (
    <Box
      margin={{ base: "52px", md: "108px" }}
      mt={{ base: "132px", md: "158px" }}
      mb={{ base: "57px", md: "64px" }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "28px", md: "56px" }}
        lineHeight={{ base: "54px", md: "42px" }}
        color="#0E2368"
        mb={{ base: "23px", md: "41px" }}
      >
        Latest Articles
      </Heading>

      <Slider ref={slider} {...settings}>
        {data.map((card, index) => (
          <div>
            <Box key={index} >
              <BlogCard {...card} />
            </Box>
          </div>
        ))}
      </Slider>
      {navBtn()}
    </Box>
  );
};

export default Articles;
