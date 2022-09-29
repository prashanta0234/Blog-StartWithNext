import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Link from "next/link";

export default function Post({ blog }) {
  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Image src={blog?.img} height={400} width={800} alt="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {blog?.title?.slice(0, 25)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Typography sx={{ display: "flex" }}>
                  {" "}
                  <Avatar
                    sx={{ width: 26, height: 26 }}
                    alt="Remy Sharp"
                    src={blog?.author?.profile}
                  />{" "}
                  &nbsp;
                  {blog?.author?.name}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonthIcon sx={{ fontSize: "14px" }} /> &nbsp;
                  {blog?.date}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <AccessTimeIcon sx={{ fontSize: "14px" }} />
                  &nbsp; {blog?.reading}
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ pb: 4 }}>
            <Link href={`/component/${blog?.id}`}>
              <Button variant="outlined" size="medium" color="primary">
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
