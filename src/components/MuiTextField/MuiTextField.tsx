import { Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="outlined" />
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiTextField;
