import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (

        <div >
            <Slider  {...settings}>
                <Image
                    src={
                        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png"
                    }
                    alt={"testing"}
                    height={"626px"}
                />
                <Image
                    src={
                        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png"
                    }
                    alt={"testing"}
                    height={"626px"}
                />
                <Image
                    src={
                        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png"
                    }
                    alt={"testing"}
                    height={"626px"}
                />

            </Slider>
        </div>

    );
};

export default Carousel;
