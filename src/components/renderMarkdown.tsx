import ReactMarkdown from "react-markdown";
import { Typography, Link, List, ListItem } from "@mui/material"

export default function MarkdownRenderer({ content }: {content: string}) {
  return (
      <ReactMarkdown
        children={content}
        components={{
          // 🚀 Shrink H1 Headings
          h1: ({ children }) => (
            <Typography variant="h5" component="h1" sx={{ mt: 2.5, mb: 1 }}>
              {children}
            </Typography>
          ),
          
          // 🚀 Shrink H2 Headings
          h2: ({ children }) => (
            <Typography variant="h6" component="h2" sx={{ mt: 2.5, mb: 1 }}>
              {children}
            </Typography>
          ),

          // 🚀 Shrink H3 Headings
          h3: ({ children }) => (
            <Typography variant="h6" component="h3" sx={{ mt: 2, mb: 1 }}>
              {children}
            </Typography>
          ),

          // 🚀 Screen and Style the Body Text
          p: ({ children }) => (
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 2,
              }}
            >
              {children}
            </Typography>
          ),

          // Optional: Map your custom MUI links seamlessly
          a: ({ href, children }) => (
            <Link href={href} target="_blank" sx={{ fontWeight: "bold" }}>
              {children}
            </Link>
          ),

          // Optional: Fix lists so they don't break padding boundaries
          ul: ({ children }) => <List sx={{ pl: 2, listStyleType: "disc" }}>{children}</List>,
          li: ({ children }) => (
            <ListItem sx={{ display: "list-item", p: 0, mb: 0.5 }}>
              <Typography variant="body2">{children}</Typography>
            </ListItem>
          )
        }}
      />
  );
}
