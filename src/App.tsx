// import MuiButton from "./components/MuiButton/MuiButton";
// import MuiTextField from "./components/MuiTextField/MuiTextField";

// import { MuiResponsiveness } from "./components/MuiResponsiveness/MuiResponsiveness";
import { Box, colors, createTheme, ThemeProvider } from "@mui/material";
import SimpleContainer from "./components/Container/Container";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

// import ResponsiveStack from "./components/ResponsStack/ResponsStack";

// import { MuiTypography } from "./components/MuiTypography/MuiTypography";

// import "./App.css";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
    palette: {
      secondary: {
        main: colors.orange[500],
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SimpleContainer>
        <Box sx={{ bgcolor: "pink", height: "100vh" }} />
      </SimpleContainer>
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiResponsiveness /> */}
      {/* <ResponsiveStack /> */}
    </ThemeProvider>
  );
}

export default App;
