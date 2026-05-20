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
  return (
    <Modal open={open} onClose={onClose}>
      <Box
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
        />

        {/* Subject */}
        <FormControl fullWidth>
          <InputLabel>
            Subject
          </InputLabel>

          <Select
            label="Subject"
            defaultValue=""
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
        />

        <Button
          variant="contained"
          onClick={onClose}
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