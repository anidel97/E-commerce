import React from "react";
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom"; 
import style from "./footer.module.css"
const Footer = () => {
    return (
        <div className={style["footer"]}>
            <Typography
                variant="h4"
                noWrap
                component={NavLink}
                to="/"
                sx={{

                    fontFamily: 'Futura Bk Bt',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#656d4a',
                    textDecoration: 'none',
                }}
            >
                AnDeStudio.
            </Typography>
            <p>Established 2025. Argentina</p>
        </div>
    )
};

export default Footer;