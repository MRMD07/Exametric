import {
  Box,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  TextField,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const subjects = [
  "Math",
  "Biology",
  "Physics",
  "Chemistry",
  "Informatics",
  "AI",
];

const demoMessages: any[] = [
  {
    role: "user",
    content:
      "Explain the difference between permutations and combinations.",
  },
  {
    role: "assistant",
    content: `
# Permutations vs Combinations

## Permutations
Order matters.

Example:
- ABC
- BAC

These count as different arrangements.

Formula:

\`\`\`
nPr = n! / (n-r)!
\`\`\`

---

## Combinations
Order does NOT matter.

Example:
- ABC
- BAC

These are considered the same group.

Formula:

\`\`\`
nCr = n! / r!(n-r)!
\`\`\`
`,
  },
];

export default function Aitutor(){
    const [subject, setSubject] = useState("Math");
    const [message, setMessage] = useState("");

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
                    width: "100%",

                    maxWidth: "1100px",

                    mx: "auto",

                    px: { xs: 2, md: 4 },

                    py: 4,

                    display: "flex",
                    flexDirection: "column",

                    flex: 1,
                    }}
                >
                    {/* TOP BAR */}
                    <Box
                    sx={{
                        display: "flex",

                        justifyContent: "space-between",

                        alignItems: "center",

                        mb: 4,
                        pb: 2,
                        borderBottom: "1px solid ",
                        borderColor: "divider",

                        gap: 2,

                        flexDirection: {
                        xs: "row",
                        md: "row",
                        },
                    }}
                    >
                        <Typography 
                            variant="h4" 
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            AI Tutor
                        </Typography>

                        <Typography 
                            variant="h3" 
                            sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                            Artificial Intelligence Tutor
                        </Typography>

                        {/* SUBJECT SELECTOR */}
                        <FormControl
                            sx={{
                            width: { xs: '45%', md: 300 },
                            }}
                        >
                            <Select
                            value={subject}
                            onChange={(e) =>
                                setSubject(
                                e.target.value
                                )
                            }
                            >
                            {subjects.map((item) => (
                                <MenuItem
                                key={item}
                                value={item}
                                >
                                {item}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Box>

                    {/* CHAT WINDOW */}
                    <Paper
                    elevation={0}
                    sx={{
                        flex: 1,

                        p: 3,

                        borderRadius: 5,

                        border: "1px solid",
                        borderColor: "divider",

                        bgcolor: "background.paper",

                        overflowY: "auto",

                        display: "flex",
                        flexDirection: "column",

                        gap: 3,

                        maxHeight: { xs: 500, md: 500 },
                    }}
                    >
                    {demoMessages.map(
                        (msg, index) => (
                        <Box
                            key={index}
                            sx={{
                            alignSelf:
                                msg.role === "user"
                                ? "flex-end"
                                : "flex-start",

                            maxWidth: "80%",
                            }}
                        >
                            <Paper
                            elevation={0}
                            sx={{
                                px: 3,
                                py: 2,

                                borderRadius: 4,

                                bgcolor: "background.default",

                                color: "text.primary",

                                border: "1px solid",
                                borderColor: "text.primary",
                            }}
                            >
                            <ReactMarkdown>
                                {msg.content}
                            </ReactMarkdown>
                            </Paper>
                        </Box>
                        )
                    )}
                    </Paper>

                    {/* INPUT AREA */}
                    <Box
                    sx={{
                        mt: 3,

                        display: "flex",

                        gap: 2,
                    }}
                    >
                    <TextField
                        placeholder={`Ask ${subject} question...`}

                        fullWidth

                        multiline

                        maxRows={4}

                        value={message}

                        onChange={(e) =>
                        setMessage(
                            e.target.value
                        )
                        }

                        sx={{
                        "& .MuiOutlinedInput-root":
                            {
                            borderRadius: 4,
                            },
                        }}
                    />

                    <IconButton
                        sx={{
                        width: 60,
                        height: 60,

                        border: "1px solid",
                        borderColor: "divider",
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                    </Box>
                </Box>

                    {/* Footer */}
                <Footer/>
            </Box>
        </>
    )
}