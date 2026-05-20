import { 
    Box,
    Typography,
    TextField,
    InputAdornment,
    Button,
 } from "@mui/material";
import { useState, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FilterModal from "../components/Filter";
import UploadModal from "../components/Upload";
import { type Resource } from "../components/ResourceCard";
import ResourceList from "../components/ResourceList";

export default async function Community(){
    const [filterOpen, setFilterOpen] = useState(false);
    const [uploadOpen, setUploadOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");

    const SUPABASE_URL = 'https://oetdlhxeylswohijqypd.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ldGRsaHhleWxzd29oaWpxeXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2OTEwMDYsImV4cCI6MjA5MDI2NzAwNn0.O0wuALd8lm3YxbbthbDYPQF0vwXULimXdKhrEN7TSDU';

    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

     const resources: Resource[] = await supabaseClient.from('resources').select('*').order('created_at', { ascending: false });
    //[
    //     // {
    //     //     id: "1",
    //     //     title: "IMO Geometry Notes",
    //     //     subject: "Math",
    //     //     drive_link: "https://google.com",
    //     // },
    //     // {
    //     //     id: "2",
    //     //     title: "Organic Chemistry Guide",
    //     //     subject: "Chemistry",
    //     //     drive_link: "https://google.com",
    //     // },
    //     // {
    //     //     id: "3",
    //     //     title: "Physics Camp Problems",
    //     //     subject: "Physics",
    //     //     drive_link: "https://google.com",
    //     // },
    // ];

    const filteredResources = useMemo(() => {
        return resources.filter((item) => {
            const matchesSearch =
            item.title.toLowerCase().includes(search.toLowerCase());

            const matchesSubject =
            selectedSubject === "" ||
            item.subject === selectedSubject;

            return matchesSearch && matchesSubject;
        });
    }, [search, selectedSubject]);

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
                            onClick={() => setUploadOpen(true)}
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
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
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
                                    <SearchIcon cursor="pointer" />
                                </InputAdornment>
                                ),
                            },
                            }}
                        />

                        <Button
                            variant="outlined"
                            startIcon={<FilterListIcon />}
                            onClick={() => setFilterOpen(true)}
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

                    <ResourceList
                        resources={filteredResources}
                    />
                </Box>

                {/* Modals */}
                <FilterModal
                    open={filterOpen}
                    onClose={() => setFilterOpen(false)}
                    selectedSubject={selectedSubject}
                    setSelectedSubject={setSelectedSubject}
                />

                <UploadModal
                    open={uploadOpen}
                    onClose={() => setUploadOpen(false)}
                />

                {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}
