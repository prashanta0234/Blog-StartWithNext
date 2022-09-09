import { Box, Button, Grid, Link, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useSWR from "swr";
import Nav from "./Nav";
// import Top from "../../component/Top";
import Post from "./Post";
// import HomePost from "./Post";

export default function Blogs() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://lwsumit.herokuapp.com/blogs",
    fetcher
  );
  if (!data && !error) {
    return <Typography sx={{ color: "black" }}>Loding.....</Typography>;
  }
  if (error) {
    return <Typography sx={{ color: "black" }}>{error}</Typography>;
  }
  return (
    <>
      <Nav />
      <Container>
        <Toolbar />
        <Toolbar />
        <Toolbar />
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {data?.map((blog) => (
            <Post key={blog.id} blog={blog} />
          ))}
        </Grid>
        <Toolbar />
      </Container>
    </>
  );
}
