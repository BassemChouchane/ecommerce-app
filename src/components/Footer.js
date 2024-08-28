import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typography } from "@mui/material";
export default function Footer (){
    return (
        <div className="footer">
            <Typography variant="h6">&copy; 2024 Unknown</Typography>
            <div className="smIcons">
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />
                <XIcon />
            </div>
        </div>
    )
}