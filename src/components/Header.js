import React from "react"
import { NavLink } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Tooltip } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import globalmarket from "../assets/global-market.jpg"
import logo from "../assets/pngwing.com.png"

export default function Header (){

    return (
        <div className="header">
            <Tooltip title="Unknown">
                <NavLink to="home"><img src={logo} /></NavLink>
            </Tooltip>
            <div className="navbar">
                <NavLink to="/" className="linkPages">Home</NavLink>
                <NavLink to="Products" className="linkPages">Products</NavLink>
                <NavLink to="About" className="linkPages">About</NavLink> 
                <NavLink to="Contact" className="linkPages">Contact</NavLink> 
                <IconButton  aria-label="add to shopping cart" className="cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </div>
        </div>
    )
}