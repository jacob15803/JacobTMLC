import Head from "next/head";
import { useState } from "react"; //React Hook for State
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// MUI Imports
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import Link from "next/link";
import { DarkMode } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import { darkTheme,theme } from "@/styles/mui/theme";
import DarkModeIcon from "@mui/icons-material/DarkMode"; 


export default function MyAppBar() {
    const [currentTheme, setCurrentTheme] = useState("dark");
    return (
        <ThemeProvider theme={currentTheme==="dark"?darkTheme:theme}>
 <AppBar position="static">
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
                sx={{mr:2}}
                onClick={()=>setCurrentTheme(currentTheme ==="dark"?"light":"dark")}
              >
                <DarkMode/>

              </IconButton>
              <Link href="/" passHref>
              <Button color="inherit">Login</Button>
              </Link>
                <Link href="/blog" passHref>

              <Button color="inherit" >Blog</Button>
              </Link>
            </Toolbar>
          </AppBar>
          </ThemeProvider>
    )
}