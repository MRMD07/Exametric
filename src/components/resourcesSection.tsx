import {
  Box,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const subjects = [
  { title: "NMTC", route: "/nmtc" },
  { title: "NPTC", route: "/nptc" },
  { title: "NCTC", route: "/nctc" },
  { title: "NBTC", route: "/nbtc" },
  { title: "POI", route: "/poi" },
  { title: "POAI", route: "/poai" },
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
          gap: 3,
          pb: 2,
          mb: 6,
        }}
      >
        {/* HEADING */}
        <Typography
          variant="h2"
          sx={{
            letterSpacing: "0.02em",
            borderBottom: "2px solid",            
            alignSelf: { xs: "flex-start", md: "center" },
          }}
        >
          PREPARE
        </Typography>

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
          <Box
            key={subject.title}
            onClick={() => { navigate(subject.route); window.scrollTo(0, 0);} }
            sx={{
              height: 150,
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
                letterSpacing: "0.03em",
                textAlign: "center",
              }}
            >
              {subject.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}