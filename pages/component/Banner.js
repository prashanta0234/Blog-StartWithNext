import { Box, Grid, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

import useSWR from "swr";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";

export default function Banner() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://lwsumit.herokuapp.com/blogs",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const first3 = data.slice(-3);
  const newest = first3.reverse();
  console.log(newest[0].id);

  return (
    <>
      <Box width="100%">
        <Toolbar />
        <Toolbar />

        <Typography sx={{ color: "black" }}>
          {" "}
          Recent Posts &gt;&gt;&gt;{" "}
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sx={6} md={6} lg={6}>
            {/* first card */}
            <Link href={`component/${newest[0].id}`} passHref>
              <Box sx={{ height: 400, width: "100%", position: "relative" }}>
                <img
                  src={newest[0].img}
                  // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt="here is an image"
                  loading="lazy"
                  // objectFit="contain"
                  height="100%"
                  width="100%"
                />
                <Box
                  sx={{
                    position: "absolute",

                    bottom: "10%",
                    left: "16px",
                    width: "100%",
                    color: "white",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: "700px",
                    }}
                  >
                    {newest[0].title}
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    {" "}
                    <PersonOutlineIcon /> &nbsp; {newest[2].author.name}
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    {" "}
                    <AccessTimeIcon /> &nbsp; {newest[0].reading}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6} sx={6} md={6} lg={6}>
            {/* mid card */}
            <Box height="50%" width="100%" sx={{ mb: "5px" }}>
              <Link href={`component/${newest[1].id}`} passHref>
                <Box
                  sx={{ height: "100%", width: "100%", position: "relative" }}
                >
                  <Image
                    src={newest[1].img}
                    alt="here is an image"
                    loading="lazy"
                    layout="fill"
                  />
                  {/* blog text */}
                  <Box
                    sx={{
                      position: "absolute",

                      bottom: "10%",
                      left: "16px",
                      width: "100%",
                      color: "white",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        fontWeight: "700px",
                      }}
                    >
                      {newest[1].title}
                    </Typography>
                    <Typography sx={{ display: "flex" }}>
                      {" "}
                      <PersonOutlineIcon /> &nbsp; {newest[2].author.name}
                    </Typography>
                    <Typography sx={{ display: "flex" }}>
                      {" "}
                      <AccessTimeIcon /> &nbsp; {newest[1].reading}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>

            {/* last one */}
            <Box height="50%" sx={{ bgcolor: "yellow" }}>
              <Link href={`component/${newest[2].id}`} passHref>
                <Box
                  sx={{ height: "100%", width: "100%", position: "relative" }}
                >
                  <Image
                    src={newest[2].img}
                    alt="here is an image"
                    loading="lazy"
                    layout="fill"
                  />
                  <Box
                    sx={{
                      position: "absolute",

                      bottom: "10%",
                      left: "16px",
                      width: "100%",
                      color: "white",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "700px",
                      }}
                    >
                      {" "}
                      {newest[2].title}
                    </Typography>
                    <Typography sx={{ display: "flex" }}>
                      {" "}
                      <PersonOutlineIcon /> &nbsp; {newest[2].author.name}
                    </Typography>
                    <Typography sx={{ display: "flex" }}>
                      {" "}
                      <AccessTimeIcon /> &nbsp; {newest[2].reading}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
