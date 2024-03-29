import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginloading, sucessLogin } from "../store/auth/action";
import { logoutsuccess } from "../store/auth/action";

const Navbar = () => {
  useEffect(() => {
    let logindata = JSON.parse(localStorage.getItem("logindata"));
    if (logindata) {
      dispatch(loginloading());
      axios({
        method: "post",
        url: "https://tach-for-india-assignment.vercel.app/users/signin",
        data: logindata,
      }).then((res) => {
        dispatch(sucessLogin(res.data));
        console.log(res, token);
      });
    }
    // eslint-disable-next-line
  }, []);

  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const handlelogout = () => {
    localStorage.removeItem("logindata");
    dispatch(logoutsuccess());
  };
  return (
    <AppBar position="static" className="Navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            style={{ cursor: "pointer", color: "#24cedb" }}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {token ? (
              <>
                <Link to={"/"}>Administrator</Link>
                <Link to={"/volunteers"}>Volunteers</Link>
              </>
            ) : (
              <Link to={"/forms"}> Forms </Link>
            )}
          </Box>
          {token ? (
            <Box
              onClick={handlelogout}
              style={{ cursor: "pointer" }}
              sx={{ flexGrow: 0 }}
            >
              logout
            </Box>
          ) : (
            <div className="registration">
              <Link to="/login">
                <Box
                  style={{ cursor: "pointer", color: "#24cedb" }}
                  sx={{ flexGrow: 0 }}
                >
                  Login
                </Box>
              </Link>
              <Link to="/signup">
                <Box
                  style={{ cursor: "pointer", color: "#24cedb" }}
                  sx={{ flexGrow: 0 }}
                >
                  Sign Up
                </Box>
              </Link>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
