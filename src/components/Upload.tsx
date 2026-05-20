import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { supabaseClient } from "./supabase";

interface UploadModalProps {
  open: boolean;
  onClose: () => void;
}

const subjects = [
  "Math",
  "Biology",
  "Physics",
  "Chemistry",
  "Informatics",
  "AI",
];

export default function UploadModal({
  open,
  onClose,
}: UploadModalProps) {

    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [link, setLink] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try{
            const { error } = await supabaseClient.from('resources').insert([{ title: title, subject: subject, drive_link: link }]);

            if (error) {
                console.error(
                    "Upload failed:",
                    error
                );

                return;
            }
            console.log("Upload successful");

            // Reset fields
            setTitle("");
            setSubject("");
            setLink("");

            // Close modal
            onClose();
        }catch (error) {
            console.error(
            "Unexpected upload error:",
            error
            );
        } 
    }

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",

          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          width: {
            xs: "90%",
            sm: 500,
          },

          bgcolor: "background.paper",
          color: "text.primary",

          borderRadius: 4,

          boxShadow: 24,

          p: 4,

          display: "flex",
          flexDirection: "column",

          gap: 3,
        }}
      >
        <Typography variant="h4">
          Upload Resource
        </Typography>

        {/* Resource Name */}
        <TextField
          label="Resource Name"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Subject */}
        <FormControl fullWidth>
          <InputLabel>
            Subject
          </InputLabel>

          <Select
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            {subjects.map((subject) => (
              <MenuItem
                key={subject}
                value={subject}
              >
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Upload Link */}
        <TextField
          label="Google Drive / Notion Link"
          fullWidth
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            borderRadius: "999px",
            height: 46,
          }}
        >
          Submit Resource
        </Button>
      </Box>
    </Modal>
  );
}