import Head from "next/head";
import { useEffect, useState } from "react"; //React Hook for State

// Material
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "@mui/material";

import MyAppBar from "@/components/common/MyAppBar";

import { theme, darkTheme } from "@/styles/mui/theme";
import { useDispatch, useSelector } from "react-redux";
import { getActiveTheme, selectTheme } from "@/redux/reducers/themeReducer";

export default function Home() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;
  // const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    dispatch(getActiveTheme()); // To get theme from Cookie
  }, []);

  const theme = useTheme();

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : theme}>
        <CssBaseline />
        <Head>
          <title>
            Blog | The Movie Lovers Club | Your Favourite Movie Articles!
          </title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyAppBar />
        <Box></Box>
      </ThemeProvider>
    </>
  );
}