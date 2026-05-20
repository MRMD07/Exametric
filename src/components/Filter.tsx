import {
  Modal,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

interface FilterModalProps {
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

export default function FilterModal({
  open,
  onClose,
}: FilterModalProps) {
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
            sm: 450,
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
          Filter Resources
        </Typography>

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

        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            borderRadius: "999px",
            height: 46,
          }}
        >
          Apply Filter
        </Button>
      </Box>
    </Modal>
  );
}