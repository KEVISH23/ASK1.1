import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";


const StudentBeforeAppbar = ({position="static"}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position={position} sx={{ bgcolor: "#254061" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontStyle: "bold" }}
            >
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                GrowthPad
              </Link>
              <Link
                to={"/student/home"}
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "2rem",
                }}
              >
                Home
              </Link>
            </Typography>
            <Link to="/studentlogin" style={{ color: "white" }}>
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default StudentBeforeAppbar;
