import Link from "next/link";
import { useState } from "react";

// MUI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { CssBaseline, ThemeProvider } from "@mui/material";

import { useTheme } from "@mui/material";

// Icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "@/redux/reducers/themeReducer";

// import { darkTheme, theme } from "@/styles/mui/theme";

export default function MyAppBar() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;
  const theme = useTheme();

  // const [currentTheme, setCurrentTheme] = useState("dark");

  return (
    <>
      {/* <ThemeProvider theme={currentTheme === "dark" ? darkTheme : theme}> */}
      {/* <CssBaseline /> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="Box" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => dispatch(toggleTheme())}
            >
              {currentTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Link href="/blog">
              <Button color="inherit">Blog</Button>
            </Link>
            <Link href="/">
            <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      {/* </ThemeProvider> */}
    </>
  );
}