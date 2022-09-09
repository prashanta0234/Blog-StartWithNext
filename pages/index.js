import { Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Nav from "./component/Nav";
import Banner from "./component/Banner";
// import HomePost from "./component/HomePost";
import HomePosts from "./component/HomePosts";

export default function Index() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Nav />
        <Container>
          <Banner />
          <HomePosts />
        </Container>
      </Box>
    </>
  );
}
