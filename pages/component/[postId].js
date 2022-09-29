import { Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Nav from "./Nav";

export default function Postdetails({ post }) {
  console.log(post);
  return (
    <>
      <Nav />
      <Toolbar />
      <Toolbar />
      <Toolbar />{" "}
      <Box>
        <Typography sx={{ color: "black" }}>{post.title}</Typography>
      </Box>
    </>
  );
}

export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await fetch(
    `https://lwsumit.herokuapp.com/blogs/${params.postId}`
  );
  const post = await res.json();

  return { props: { post } };
}
