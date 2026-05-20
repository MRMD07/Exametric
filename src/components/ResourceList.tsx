import { Stack, Typography } from "@mui/material";

import { ResourceCard, type Resource }  from "./ResourceCard";

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({
  resources,
}: ResourceListProps) {
  if (resources.length === 0) {
    return (
      <Typography sx={{ mt: 4 }}>
        No matching resources found.
      </Typography>
    );
  }

  return (
    <Stack
      spacing={3}
      sx={{
        width: "100%",
        mt: 5,
      }}
    >
      {resources.map((item) => (
        <ResourceCard
          key={item.id}
          item={item}
        />
      ))}
    </Stack>
  );
}