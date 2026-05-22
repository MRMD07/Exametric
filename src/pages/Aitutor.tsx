import {
  Box,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MarkdownRenderer from "../components/renderMarkdown";
import { storage}  from "../components/localStorage";
import getAI from "../components/getAI";

const STORAGE_KEY = "aitutor_messages";

const subjects = [
  "Math",
  "Biology",
  "Physics",
  "Chemistry",
  "Informatics",
  "AI",
];

type SubjectChats = {
  [key: string]: any[];
};

const initialMessages: SubjectChats = {
  Math: [
    {
      role: "assistant",
      content:
        "Hello! I am your AI tutor. Ask me anything related to Math.",
    },
  ],

  Biology: [
    {
      role: "assistant",
      content:
        "Hello! I am your AI tutor. Ask me anything related to Biology.",
    },
  ],

  Physics: [
    {
      role: "assistant",
      content:
        "Hello! I am your AI tutor. Ask me anything related to Physics.",
    },
  ],

  Chemistry: [
    {
      role: "assistant",
      content:
        "Hello! I am your AI tutor. Ask me anything related to Chemistry.",
    },
  ],

  Informatics: [
    {
      role: "assistant",
      content:
        "Hello! I am your AI tutor. Ask me anything related to Informatics.",
    },
  ],

  AI: [
    {
      role: "assistant",
      content:
        "Hello! I am your AI tutor. Ask me anything related to AI.",
    },
  ],
};

export default function Aitutor(){
    const [subject, setSubject] = useState("Math");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");   
    const [messages, setMessages] = useState<SubjectChats>(() => { return storage.get(STORAGE_KEY,initialMessages); });
    const paperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (paperRef.current) {
          paperRef.current.scrollTop = paperRef.current.scrollHeight;
        }
    }, [messages, subject]);

    useEffect(() => {
        storage.set(STORAGE_KEY, messages);
    }, [messages]);

    async function handleSend() {
    if (!message.trim()) return;
    if (loading) return;
    
    setLoading(true);

    const userMessage = {
        role: "user" as const,
        content: message,
    };

    // Build updated subject chat
    const updatedChat = [
        ...(messages[subject] || []),
        userMessage,
    ].slice(-5);

    // Update UI immediately
    setMessages((prev) => ({
        ...prev,

        [subject]: updatedChat,
    }));

    setMessage("");

    // AI CALL
    const resp = await getAI(
        updatedChat,
        2,
        subject
    );

    const assistantMessage = {
        role: "assistant" as const,
        content: resp,
    };

    // Add AI response
    setMessages((prev) => ({
        ...prev,

        [subject]: [
        ...(prev[subject] || []),
        assistantMessage,
        ].slice(-5), // Keep only the last 5 messages for context
    }));

    setLoading(false);
    }

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

                        mb: 2,
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
                            variant="h3" 
                            sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                            Artificial Intelligence Tutor
                        </Typography>

                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                            setMessages(initialMessages);
                            storage.set(STORAGE_KEY, initialMessages);
                            }}
                            sx={{
                                ml: { md: "10%" },
                                p: { xs: 2.5, md: 2 },
                                height: { xs: 40, md: "fit-content" },
                                alignSelf: "center",
                            }}
                        >
                            Clear
                        </Button>

                        <Typography 
                            variant="h4" 
                            sx={{ 
                                display: { xs: 'flex', md: 'none' },
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1,
                         }}
                        >
                            <span>AI</span>
                            <span>Tutor</span>
                        </Typography>

                        {/* SUBJECT SELECTOR */}
                        <FormControl
                            sx={{
                            width: { xs: '45%', md: 300 },
                            alignSelf: "center",
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
                    elevation={2}
                    ref={paperRef}
                    sx={{
                        flex: 1,

                        p: 1,

                        border: "1px solid",
                        borderColor: "divider",

                        bgcolor: "background.paper",

                        overflowY: "auto",

                        display: "flex",
                        flexDirection: "column",

                        gap: 1,
                        minHeight: 350,

                        maxHeight: { xs: 400, md: 450 },
                    }}
                    >
                    {messages[subject]?.map(
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
                                px: 2,
                                py: 1,

                                borderRadius: 4,

                                bgcolor: "background.default",
                                height: "fit-content",

                                color: "text.primary",
                                width: "fit-content",
                                maxWidth: "150rem",

                                border: "1px solid",
                                borderColor: "divider",
                            }}
                            >
                                <MarkdownRenderer content={msg.content} />
                            </Paper>
                        </Box>
                        )
                    )}
                    </Paper>

                    {/* INPUT AREA */}
                    <Box
                    sx={{
                        mt: 2,

                        display: "flex",

                        gap: 2,
                    }}
                    >
                    <TextField
                        placeholder={`Ask ${subject} question...`}

                        fullWidth

                        multiline

                        maxRows={3}

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
                        "& ::-webkit-scrollbar-thumb": {
                            cursor: "pointer",
                        },
                        "& ::-webkit-scrollbar-track": {
                            cursor: "pointer",
                        },
                        "& ::-webkit-scrollbar": {
                            cursor: "pointer",
                        },
                        }}
                    />

                    <IconButton
                        onClick={handleSend}
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