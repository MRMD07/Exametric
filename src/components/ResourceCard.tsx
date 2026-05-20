import {
  Paper,
  Box,
  Link,
} from "@mui/material";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export interface Resource {
    id: number | string;
    created_at: string;
    title: string;
    subject: string;
    drive_link: string;
}

interface ResourceCardProps {
  item: Resource;
}

export function ResourceCard({
  item,
}: ResourceCardProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,

        borderRadius: 4,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        gap: 2,

        border: "1px solid",
        borderColor: "divider",

        bgcolor: "background.paper",
      }}
    >
      {/* LEFT */}
      <Box>
        <Link
          href={item.drive_link}
          target="_blank"
          underline="hover"

          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,

            fontSize: "1.1rem",
            fontWeight: 500,
          }}
        >
          {item.title}

          <OpenInNewIcon fontSize="small" />
        </Link>
      </Box>

      {/* SUBJECT BADGE */}
      <Box
        sx={{
          px: 2,
          py: 0.7,

          borderRadius: "999px",

          bgcolor: "text.primary",
          color: "background.default",

          fontSize: "0.9rem",

          whiteSpace: "nowrap",
        }}
      >
        {item.subject}
      </Box>
    </Paper>
  );
}