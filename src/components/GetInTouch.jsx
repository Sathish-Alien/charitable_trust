import React from 'react'
import {
    Box,
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const GetInTouch = () => {

    const getLang = useSelector((state) => state.setLangReducerResult)
    const { lang } = getLang

    return (
        <Box sx={{ p: "15%" }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QgD25qSdVoY?controls=0&amp;start=33" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{width: "100%"}}></iframe>
        </Box>
    )
}

export default GetInTouch;