import { Typography } from "@mui/material";
export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading </Typography>
      <Typography variant="h2">h2 heading </Typography>
      <Typography variant="h3">h3 heading </Typography>
      <Typography variant="h4" component="h1">
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading </Typography>
      <Typography variant="h6">h6 heading </Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2 </Typography>

      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
        deleniti?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, officia!{" "}
      </Typography>
    </div>
  );
};
