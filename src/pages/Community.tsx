import { 
    Box,
    Typography,
    TextField,
    InputAdornment,
    Button,
 } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList"; // Added for filter icon styling
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Community(){
    return(
        <>
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "background.default",
                    color: "text.primary",
                }}
            >
                {/* Navbar */}
                <Navbar/>

                {/* Main Content */}
                <Box
                    sx={{
                        px: { xs: 2, md: 6 },
                        py: 4,
                        width: "100%",
                        maxWidth: "1200px",
                        mx: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", // Keeps rows centered horizontally
                    }}
                >
                    {/* HEADING + UPLOAD ROW */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 3,
                            mb: 5,
                            width: "100%",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                textAlign: "center",
                                whiteSpace: "nowrap", // Prevents heading from breaking onto two lines
                            }}
                        >
                            Community Resources
                        </Typography>
                        <Button 
                            variant="contained"
                            sx={{
                                height: 40,
                                px: 3,
                                textTransform: "none",
                                fontWeight: "bold",
                            }}
                        >
                            Upload
                        </Button>
                    </Box>

                    {/* SEARCH + FILTER ROW */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            width: "100%",
                            maxWidth: 900, // Matches your original maximum text field limit
                        }}
                    >
                        <TextField
                            placeholder="Search Resources..."
                            variant="outlined"
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "999px",
                                    height: 38, // Slightly bumped up from 34 so text fields aren't cramped
                                    fontSize: "1.1rem",
                                    px: 2,
                                },
                            }}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }
                            }}
                        />
                        <Button 
                            variant="outlined" // Outlined separates it visually from the primary contained Upload button
                            startIcon={<FilterListIcon />}
                            sx={{
                                borderRadius: "999px", // Matches search box pill style
                                height: 38, 
                                px: 3,
                                textTransform: "none",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Filter
                        </Button>
                    </Box>
                </Box>

                {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}
