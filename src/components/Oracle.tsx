import {
  Box,
  Paper,
  Typography,
  IconButton,
  TextField,
  Fab,
} from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

import { useState } from "react";
import MarkdownRenderer from "./renderMarkdown";

const demoMessages = [
  {
    role: "assistant",
    content:
      "Hello. I am the **Oracle**. Ask anything related to olympiads, preparation, or concepts.",
  },
];

export default function Oracle() {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages] = useState(demoMessages);

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
              justifyContent:
                "space-between",
            }}
          >
            <Typography variant="h5">
              Oracle
            </Typography>

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
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      px: 2.5,
                      py: 1.8,

                      borderRadius: 4,

                      bgcolor:
                        msg.role ===
                        "user"
                          ? "text.primary"
                          : "background.default",

                      color:
                        msg.role ===
                        "user"
                          ? "background.default"
                          : "text.primary",

                      border:
                        msg.role ===
                        "assistant"
                          ? "1px solid"
                          : "none",

                      borderColor:
                        "divider",
                    }}
                  >
                     <MarkdownRenderer content={msg.content} />
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
                    borderRadius: 3,
                  },
              }}
            />

            <IconButton
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