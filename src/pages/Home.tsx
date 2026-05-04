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
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../components/navbar";

export default function Home() {
    const navigate = useNavigate();
    const handleScroll = () => {
        const section = document.getElementById("resources");
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Navbar />
            <Box>
                <Box
                sx={{
                    px: { xs: 3, md: 8 },
                    py: { xs: 6, md: 10 },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 6,
                }}
                >
                    {/* LEFT SIDE */}
                    <Box sx={{ maxWidth: 600 }}>
                        <Typography
                        variant="h2"
                        sx={{
                            mb: 3,
                            lineHeight: 1.1,
                        }}
                        >
                        OLYMPIAD <br /> HUB
                        </Typography>

                        <Typography variant="h6" sx={{ mb: 4 }}>
                        NSTC Preparation. <br />
                        AI Assisted Learning. <br />
                        NSTC Syllabuses. <br />
                        Free Resources. <br />
                        Practice Tests. <br />
                        Guides From Alumnis.
                        </Typography>

                        {/* BUTTONS */}
                        <Stack direction="column" spacing={2} sx={{ width: "fit-content" }}>
                        <Button
                            variant="contained"
                            onClick={handleScroll}
                            sx={{
                            borderRadius: "230px",
                            px: 3,
                            "&:hover": {
                                transform: "translateY(-1px)",
                                }
                            }}
                        >
                            Start Preparing
                        </Button>

                        <Button
                            variant="outlined"
                            component="a"
                            href="https://forms.gle/YOUR_LINK_HERE"
                            target="_blank"
                            sx={{
                            borderRadius: "20px",
                            borderColor: "primary.main",
                            px: 3,
                            }}
                        >
                            Join WhatsApp Community
                        </Button>
                        </Stack>
                    </Box>
                </Box>
                 {/* Target section for scroll */}
                <Box
                    id="resources"
                    sx={{
                    height: "100vh",
                    px: 4,
                    py: 6,
                    }}
                >
                    <Typography variant="h4">
                    Resources Section (placeholder)
                    </Typography>
                </Box>

            </Box>
        </>

    )
}