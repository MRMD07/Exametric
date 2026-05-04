import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../components/navbar";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
        </>

    )
}