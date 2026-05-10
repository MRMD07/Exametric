import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
} from "@mui/material";


interface Resource {
  label: string;
  content: string;
}

interface SubjectPageLayoutProps {
  title: string;
  guide: string;
  resources: Resource[];
}

export default function SubjectPageLayout({
  title,
  guide,
  resources,
}: SubjectPageLayoutProps) {
    const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 4,
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      {/* PAGE TITLE */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 5,
        }}
      >
        {title}
      </Typography>

      {/* GUIDE SECTION */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: "background.paper",
          p: { xs: 3, md: 5 },
          borderRadius: 5,
          minHeight: "fit-content",
          maxHeight: 500,
          overflowX: "hidden",
          overflowY: "auto",
          mb: 5,
        }}
      >
        <Typography
         variant="body1"
         dangerouslySetInnerHTML={{ __html: guide}} 
        />
      </Paper>

      {/* RESOURCE BUTTONS */}
      <Typography variant="h4" sx={{ mb: 3, pb: 1, borderBottom: "2px solid", borderColor: "primary.main"}}>
        Resources
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",            
            px: 2, 
        }}
        useFlexGap
      >
        {resources.map((resource, index) => (
          <Button
            key={resource.label}
            onClick={() => navigate(resource.content)}
            variant={index === 0 ? "contained" : "outlined"}
            sx={{
              borderRadius: "999px",
              px: 4,
              minWidth: 140,
              '&:hover':{
                transform: "translateY(-1px)",
              }
            }}
          >
            {resource.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}