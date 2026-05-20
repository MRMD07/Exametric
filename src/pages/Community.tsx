import { 
    Box,
    Typography,
    TextField,
    InputAdornment,
    Button,
 } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
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
                        alignItems: "center", 
                        overflowX: "hidden",
                    }}
                >
                        {/* HEADING + UPLOAD ROW */}
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        justifyContent: "center",

                        gap: 2,
                        mb: 5,

                        width: "100%",
                    }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                            textAlign: "center",
                            fontSize: { xs: "2.2rem", md: "3rem" },
                            mr: { xs: 0, md: 6 },
                            }}
                        >
                            Community Resources
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                            height: 42,
                            px: 3,
                            textTransform: "none",
                            fontWeight: "bold",
                            borderRadius: "999px",
                            flexShrink: 0,
                            }}
                        >
                            Upload
                        </Button>
                    </Box>

                    {/* SEARCH + FILTER ROW */}
                    <Box
                    sx={{
                        display: "flex",

                        flexDirection: { xs: "column", sm: "row" },

                        alignItems: "center",
                        justifyContent: "center",

                        gap: 2,

                        width: "100%",

                        maxWidth: {
                        xs: "100%",
                        md: 700, 
                        },
                    }}
                    >
                    <TextField
                        placeholder="Search Resources..."
                        variant="outlined"
                        fullWidth
                        sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "999px",
                            height: 44,
                            fontSize: "1rem",
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
                        },
                        }}
                    />

                    <Button
                        variant="outlined"
                        startIcon={<FilterListIcon />}
                        sx={{
                        borderRadius: "999px",

                        height: 44,

                        px: 3,

                        width: {
                            xs: "100%",
                            sm: "auto",
                        },

                        textTransform: "none",

                        whiteSpace: "nowrap",

                        flexShrink: 0,
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
