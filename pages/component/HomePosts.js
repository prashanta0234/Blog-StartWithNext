import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useSWR from "swr";
import HomePost from "./HomePost";

export default function HomePosts() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://lwsumit.herokuapp.com/blogs",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const limit = data.slice(0, 6);
  console.log(data);
  return (
    <>
      <Toolbar />
      <Typography
        sx={{ color: "black", textAlign: "center", color: "#0B1222" }}
        variant="h4"
      >
        Post{" "}
      </Typography>
      <Toolbar />
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {limit?.map((blog) => (
            <HomePost key={blog.id} blog={blog} />
          ))}
        </Grid>
        <Toolbar />
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" color="success">
            See More
          </Button>
        </Box>

        <Toolbar />
      </Container>
    </>
  );
}
