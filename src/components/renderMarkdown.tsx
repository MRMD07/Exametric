import ReactMarkdown from "react-markdown";
import { Box, Typography, Link, List, ListItem } from "@mui/material"

export default function MarkdownRenderer({ content }: {content: string}) {
  return (
    <Box
      sx={{
        width: "100%",
        // 🚀 Limits the horizontal size of the text body to keep it readable
        maxWidth: "750px", 
        mx: "auto",
        lineHeight: 1.6,
      }}
    >
      <ReactMarkdown
        children={content}
        components={{
          // 🚀 Shrink H1 Headings
          h1: ({ children }) => (
            <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", mt: 3, mb: 1.5 }}>
              {children}
            </Typography>
          ),
          
          // 🚀 Shrink H2 Headings
          h2: ({ children }) => (
            <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", mt: 2.5, mb: 1 }}>
              {children}
            </Typography>
          ),

          // 🚀 Shrink H3 Headings
          h3: ({ children }) => (
            <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
              {children}
            </Typography>
          ),

          // 🚀 Screen and Style the Body Text
          p: ({ children }) => (
            <Typography 
              variant="body2" // 📏 Changes default body1 (16px) to body2 (14px)
              sx={{ 
                mb: 2, 
                color: "text.secondary", 
                fontSize: { xs: "0.875rem", md: "0.95rem" } // Clean, scaled sizing
              }}
            >
              {children}
            </Typography>
          ),

          // Optional: Map your custom MUI links seamlessly
          a: ({ href, children }) => (
            <Link href={href} target="_blank" underline="hover" sx={{ fontWeight: "bold" }}>
              {children}
            </Link>
          ),

          // Optional: Fix lists so they don't break padding boundaries
          ul: ({ children }) => <List sx={{ pl: 2, listStyleType: "disc" }}>{children}</List>,
          li: ({ children }) => (
            <ListItem sx={{ display: "list-item", p: 0, mb: 0.5 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>{children}</Typography>
            </ListItem>
          )
        }}
      />
    </Box>
  );
}
