import React, { useState } from 'react'
// mui
import {
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'
import Temple from "../assets/temple.jpg"

const Gallery = () => {

    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url:  Temple
        },
        {
            alt: 'image2',
            url: Temple
        },
        {
            alt: "image3",
            url: Temple
        },
        {
            alt: "image4",
            url: Temple 
        },
        {
            alt: "image5",
            url: Temple
        },
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
            {/* <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Plans and dimension'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Rooms Gallery
                </Typography>
                <Paragraph text={
                    'We have more 5000 reviews and our\
                    customers trust on our quality product\
                    and trust own our product. If you interested,\
                    contact us.'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box> */}

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