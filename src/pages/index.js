import Head from "next/head";
import { useEffect, useState } from "react"; //React Hook for State

// Material
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { useTheme } from "@mui/material";

import MyAppBar from "@/components/common/MyAppBar";

import { lightTheme, darkTheme } from "@/styles/mui/theme";
import { CustomCard, MyCard } from "@/styles/mui/customComponent";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, getActiveTheme } from "@/redux/reducers/themeReducer";

export default function Home() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme).activeTheme;

  useEffect(() => {
    dispatch(getActiveTheme()); // To get theme from Cookie
  }, []);

  // const [visible, setVisible] = useState(false); // Always call hooks at the top of the function.
  // const [currentTheme, setCurrentTheme] = useState("light");

  const theme = useTheme();

  const movies = [
    {
      name: "Fight Club",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiBlLWuu1a0B1Wt-bkTagxXGu2C0KhLdI36DBFssZ0obqAViVFv7LRC8iGkPRURoNsB2wAMag1ldmBhfRc9QEkj8ZxiL3mDGriz6khlqI&s=10",
      desc: "Directed By Joss Whedon",
    },
    {
      name: "Terminator",
      img: "https://townsquare.media/site/295/files/2019/10/Terminator-Orion.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
      desc: "Directed By James Cameron",
    },
    {
      name: "Inception",
      img: "https://images5.alphacoders.com/112/1122037.jpg",
      desc: "Directed By Chris Nolan",
    },
    {
      name: "Jurassic Park",
      img: "https://i.ytimg.com/vi/Rc_i5TKdmhs/maxresdefault.jpg",
      desc: "Directed By Steven Spielberg",
    },
    {
      name: "Tenet",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG76USMDRztfTTgzxIo3-B2D47aYvtaiA2R2se-Qiq09G4OdAaRw3pBOCWjqIyr7HS1OST-f6Prr0I-fVw_vXhbtqVT9EHHc-R9ifVQJFh&s=10",
      desc: "Directed by Chris Nolan",
    },
  ];
return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : theme}>
        <CssBaseline />
        <Head>
          <title>The Movie Lovers Club | Your Favourite Movie Articles!</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyAppBar />
        <Box height="25px" />
        <Box>
          <Container>
            <Grid container spacing={2} direction="row" justifyContent="center">
              {movies ? (
                movies.map((movie) => (
                  <Grid size={{ xl: 4, md: 4, xs: 12 }}>
                    <CustomCard
                      name={movie.name}
                      image={movie.img}
                      description={movie.desc}
                    />
                  </Grid>
                ))
              ) : (
                <></>
              )}
            </Grid>
          </Container>
          {/* <Button onClick={() => setVisible(!visible)}>Toggle</Button>

            <Box height="20px" />

            {visible ? (
              <Box height="200px" sx={{ background: "pink", width: "500px" }} />
            ) : (
              <></>
            )} */}
        </Box>
      </ThemeProvider>
    </>
  );
}