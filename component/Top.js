import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Top() {
  return (
    <>
      <Box
        sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between" }}
      >
        <Typography sx={{ display: "flex", fontSize: "14px" }}>
          <MailOutlineIcon /> &nbsp; prashanta0234@gmail.com
        </Typography>
        <Typography>
          <a
            href="https://www.facebook.com/prashanta.chakraborty.14"
            rel={"noreferrer"}
            target={"_blank"}
          >
            {" "}
            <FacebookIcon />
          </a>{" "}
          &nbsp;
          <a
            href="https://www.facebook.com/prashanta.chakraborty.14"
            rel={"noreferrer"}
            target={"_blank"}
          >
            {" "}
            <TwitterIcon />
          </a>{" "}
          &nbsp;
          <a
            href="https://www.facebook.com/prashanta.chakraborty.14"
            rel={"noreferrer"}
            target={"_blank"}
          >
            {" "}
            <LinkedInIcon />
          </a>{" "}
          &nbsp;
          <a
            href="https://www.facebook.com/prashanta.chakraborty.14"
            rel={"noreferrer"}
            target={"_blank"}
          >
            {" "}
            <GitHubIcon />
          </a>{" "}
          &nbsp;
        </Typography>
      </Box>
    </>
  );
}
