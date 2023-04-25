import React, { useState } from 'react'
// mui
import {
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Temple from "../assets/pdf_page-0001-min.jpg"
import Temple1 from "../assets/pdf_page-0002-min.jpg"

const Gallery = () => {

    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: Temple
        },
        {
            alt: 'image2',
            url: Temple1
        },
        // {
        //     alt: "image3",
        //     url: Temple
        // },
        // {
        //     alt: "image4",
        //     url: Temple
        // },
        // {
        //     alt: "image5",
        //     url: Temple
        // },
    ];

    const renderSlides = imageData.map((image) => (
        <div key={image.alt}>
            <img src={image.url} alt={image.alt} />
        </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                pt: "1%",
                display: { xs: 'flex' },
            }}
        >
            <Box sx={{
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                    centerSlidePercentage={40}
                    thumbWidth={180}
                    dynamicHeight={false}
                    centerMode={false}
                    showArrows={false}
                    autoPlay={false}
                    infiniteLoop={true}
                    selectedItem={imageData[currentIndex]}
                    onChange={handleChange}
                    className="carousel-container"
                >
                    {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery