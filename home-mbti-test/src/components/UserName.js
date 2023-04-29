import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import houseImage from "../assets/house.png";

function UserName({ setUserName }) {
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(inputName);
    navigate("/test");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <h1>Home-BTI TEST</h1>
        
        <h2>Team Only</h2>
        <img src={houseImage} alt="House" style={{ width: "200px" }}/>
        <h3>2023 사회문제해결 자원봉사 아이디어 해커톤 대회</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your name"
            variant="outlined"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Start Test
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default UserName;
