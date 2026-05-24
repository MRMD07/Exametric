import {
  Box,
  Paper,
  Button,
  Typography,
  IconButton,
  TextField,
  Fab,
} from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

import { useState, useEffect, useRef } from "react";
import MarkdownRenderer from "./renderMarkdown";
import { storage}  from "./localStorage";
import getAI from "./getAI";
import LoadingIndicator from "./loading";

const introMessage = [
  {
    role: "assistant",
        content:
        "Hello. I am the **Oracle**. Ask anything related to olympiads, preparation, or concepts.",
  },
];

const STORAGE_KEY = "myList";

export default function Oracle() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>(() => storage.get(STORAGE_KEY, introMessage));
  const paperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (paperRef.current) {
      paperRef.current.scrollTop = paperRef.current.scrollHeight;
    }
  }, [open, messages]);

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

  const loadingMessage = {
    role: "assistant" as const,
    content: "",
    loading: true,
  };

  // Build updated chat FIRST
  const updatedMessages = [
    ...messages,
    userMessage,
    loadingMessage,
  ].slice(-25);

  // Instant UI update
  setMessages(updatedMessages);

  setMessage("");

  // remove loading bubble before sending context
  const resp = await getAI( [...messages.slice(-5), userMessage], 1);

  // REPLACE loading bubble
  setMessages((prev) =>
    prev
      .filter((msg) => !msg.loading)

      .concat({
        role: "assistant",
        content: resp,
      })

      .slice(-25)
  );

  setLoading(false);

}

  return (
    <>
      {/* FLOATING BUTTON */}
      {!open && (
        <Fab
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",

            bottom: 24,
            right: 24,

            width: 68,
            height: 68,

            bgcolor: "text.primary",
            color: "background.default",

            "&:hover": {
              bgcolor: "text.primary",
            },

            zIndex: 2000,
          }}
        >
          <AutoAwesomeIcon />
        </Fab>
      )}

      {/* CHAT WINDOW */}
      {open && (
        <Paper
          elevation={10}
          sx={{
            position: "fixed",

            bottom: 24,
            right: 15,

            width: {
              xs: "calc(100vw - 32px)",
              sm: 350,
              md: 400,
            },

            height: {
              xs: "75vh",
              sm: "75vh",
              md: 650,
            },

            borderRadius: 5,

            overflow: "hidden",

            display: "flex",
            flexDirection: "column",

            zIndex: 2000,

            bgcolor: "background.paper",
            color: "text.primary",

            border: "1px solid",
            borderColor: "divider",
          }}
        >
          {/* HEADER */}
          <Box
            sx={{
              px: 3,
              py: 2,

              borderBottom: "1px solid",
              borderColor: "divider",

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">
              Oracle
            </Typography>

            <Button
                variant="outlined"
                color="error" 
                onClick={() => {
                  setMessages(introMessage);
                  storage.set(STORAGE_KEY, introMessage);
                }}
                sx={{
                    mr: { xs: "15%", sm: "20%", md: "35%" },
                }}
            >
                Clear Chat
            </Button>

            <IconButton
              onClick={() =>
                setOpen(false)
              }
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* MESSAGES */}
          <Box
            ref={paperRef}
            sx={{
              flex: 1,

              overflowY: "auto",

              p: 3,

              display: "flex",
              flexDirection: "column",

              gap: 2,
            }}
          >
            {messages.map(
              (msg, index) => (
                <Box
                  key={index}
                  sx={{
                    alignSelf:
                      msg.role ===
                      "user"
                        ? "flex-end"
                        : "flex-start",

                    maxWidth: "85%",
                    minHeight: "fit-content",
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      px: 2,
                      py: 1.5,

                      borderRadius: 4,
                      width: "fit-content",
                      maxWidth: "100%",
                      overflowWrap: "break-word",

                      bgcolor: "background.default",

                      color: "text.primary",

                      border:
                        msg.role ===
                        "assistant"
                          ? "1px solid"
                          : "none",

                      borderColor:
                        "divider",
                    }}
                  >
                     {msg.loading ? (
                      <LoadingIndicator />
                    ) : (
                      <MarkdownRenderer content={msg.content} />
                    )}
                  </Paper>
                </Box>
              )
            )}
          </Box>

          {/* INPUT */}
          <Box
            sx={{
              p: 2,

              borderTop: "1px solid",
              borderColor: "divider",

              display: "flex",
              gap: 1.5,
            }}
          >
            <TextField
              placeholder="Ask Oracle..."

              fullWidth

              multiline

              maxRows={2}

              value={message}

              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }

              sx={{
                "& .MuiOutlinedInput-root":
                  {
                    borderRadius: 3,
                  },
              }}
            />

            <IconButton
              onClick={handleSend}
              sx={{
                width: 52,
                height: 52,

                border: "1px solid",
                borderColor:
                  "divider",
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
}