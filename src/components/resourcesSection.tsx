import {
  Box,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const subjects = [
  { title: "NMTC", desc: "Entry test for International Mathematics Olympiad", route: "/nmtc" },
  { title: "NPTC", desc: "Entry test for International Physics Olympiad", route: "/nptc" },
  { title: "NCTC", desc: "Entry test for International Chemistry Olympiad", route: "/nctc" },
  { title: "NBTC", desc: "Entry test for International Biology Olympiad", route: "/nbtc" },
  { title: "POI", desc: "Entry test for International Olympiad in Informatics", route: "/poi" },
  { title: "POAI", desc: "Entry test for International Olympiad in Artificial Intelligence", route: "/poai" },
  { title: "Community Resources", desc: "", route: "/community-resources" },
  { title: "AI Tutor", desc: "AI teacher that answers all subject related questions", route: "/ai-tutor" },
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
            md: "repeat(6, 1fr)",
          },
          gap: 5,
        }}
      >
        {subjects.map((subject) => (
          <Box
            key={subject.title}
            onClick={() => navigate(subject.route) }
            sx={{
              height: { xs: "fit-content", md: 150 },
              borderRadius: 5,
              cursor: "pointer",
              
              gridColumn: {
                md: subject.title == "Community Resources" ? '2 / span 2' : 'span 2',
              },

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              p: {  xs: 2, md: 4 },

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
              variant="h4"
              sx={{
                letterSpacing: "0.03em",
                textAlign: "center",
              }}
            >
              {subject.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
              }}
            >
              {subject.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
