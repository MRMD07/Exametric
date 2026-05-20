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
  selectedSubject: string;

  setSelectedSubject: (
    value: string
  ) => void;
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
    selectedSubject,
    setSelectedSubject,
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
            value={selectedSubject}
            onChange={(e) =>
              setSelectedSubject(e.target.value)
            }
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

        {/* BUTTON ACTIONS ROW */}
        <Box
        sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            mt: 2,
        }}
        >
            {/* CLEAR FILTER BUTTON */}
            <Button
                variant="outlined"
                color="error" 
                onClick={() => {setSelectedSubject(""); onClose();}}
                disabled={!selectedSubject} 
                sx={{
                flex: 1,
                borderRadius: "999px",
                height: 46,
                textTransform: "none",
                }}
            >
                Clear Filter
            </Button>

            {/* APPLY FILTER BUTTON */}
            <Button
                variant="contained"
                onClick={onClose}
                sx={{
                flex: 1,
                borderRadius: "999px",
                height: 46,
                textTransform: "none",
                }}
            >
                Apply Filter
            </Button>
        </Box>
      </Box>
    </Modal>
  );
}