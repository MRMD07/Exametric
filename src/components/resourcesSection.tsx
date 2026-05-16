import {
  Box,
  Typography,
  TextField,
  Paper,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const subjects = [
  { title: "NMTC", route: "/nmtc" },
  { title: "NPTC", route: "/nptc" },
  { title: "NCTC", route: "/nctc" },
  { title: "NBTC", route: "/nbtc" },
  { title: "Community Resources", route: "/community-resources" },
  { title: "AI Tutor", route: "/ai-tutor" },
];

export default function PrepareSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        mx: "auto",
        px: { xs: 3, md: 8 },
        py: { xs: 3, md: 4 },
      }}
    >
      {/* TOP SECTION */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          borderBottom: "2px solid",
          mb: 8,
        }}
      >
        {/* HEADING */}
        <Typography
          variant="h2"
          sx={{
            letterSpacing: "0.02em",
            alignSelf: { xs: "flex-start", md: "center" },
          }}
        >
          PREPARE
        </Typography>

        {/* SEARCH */}
        <TextField
          placeholder="Search Resources..."
          variant="outlined"
          fullWidth
          sx={{
            maxWidth: 700,

            "& .MuiOutlinedInput-root": {
              borderRadius: "999px",
              height: 64,
              fontSize: "1.1rem",
              px: 1,
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
      </Box>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 5,
        }}
      >
        {subjects.map((subject) => (
          <Paper
            key={subject.title}
            elevation={2}
            onClick={() => navigate(subject.route)}
            sx={{
              height: 180,
              borderRadius: 5,
              cursor: "pointer",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              bgcolor: "background.default",
              color: "text.primary",

              transition: "all 0.25s ease",

              border: "1px solid",
              borderColor: "primary.main",

              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 8,
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 400,
                letterSpacing: "0.03em",
                textAlign: "center",
                fontSize: { xs: "2.5rem", md: "3.2rem" },
              }}
            >
              {subject.title}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}