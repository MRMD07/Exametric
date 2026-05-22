import ReactMarkdown from "react-markdown";
import { Typography, Link, Box } from "@mui/material"

export default function MarkdownRenderer({ content }: {content: string}) {
  return (
      <ReactMarkdown
        children={content}
        components={{
          h1: ({ children }) => (
            <Typography
              component="h1"
              variant="h5"
              sx={{ mt: 2.5, mb: 1 }}
            >
              {children}
            </Typography>
          ),

          h2: ({ children }) => (
            <Typography
              component="h2"
              variant="h6"
              sx={{ mt: 2.5, mb: 1 }}
            >
              {children}
            </Typography>
          ),

          h3: ({ children }) => (
            <Typography
              component="h3"
              variant="h6"
              sx={{ mt: 2, mb: 1 }}
            >
              {children}
            </Typography>
          ),

          p: ({ children }) => (
            <Typography
              component="div"
              variant="body1"
              sx={{
                mb: 0.5,
                lineHeight: 1.7,
              }}
            >
              {children}
            </Typography>
          ),

          a: ({ href, children }) => (
            <Link
              href={href}
              target="_blank"
              sx={{
                fontWeight: "bold",
              }}
            >
              {children}
            </Link>
          ),

          ul: ({ children }) => (
            <Box
              component="ul"
              sx={{
                pl: 3,
                mb: 1,
              }}
            >
              {children}
            </Box>
          ),

          li: ({ children }) => (
            <Box
              component="li"
              sx={{
                mb: 0.5,
              }}
            >
              {children}
            </Box>
          ),
        }}
      />
  );
}
