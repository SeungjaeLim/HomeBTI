import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import springImage from "../assets/spring.jpg";
import summerImage from "../assets/summer.jpg";
import autumnImage from "../assets/autumn.jpg";
import winterImage from "../assets/winter.png";

const seasons = [
  { name: "봄", description: "따스한 집BTI", image: springImage },
  { name: "여름", description: "정열적인 집BTI", image: summerImage },
  { name: "가을", description: "쓸쓸한 집BTI", image: autumnImage },
  { name: "겨울", description: "고요한 집BTI", image: winterImage },
];

function ResultsPage({ userName }) {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];
  const mismatchedSeasons = seasons.filter(
    (season) => season.name !== randomSeason.name
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can save or process data here as needed.
    console.log(`Address: ${address}, Season: ${randomSeason.name}`);
    navigate("/");
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${randomSeason.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "white",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  };

  return (
    <Container maxWidth="sm" sx={{ position: "relative" }}>
      <Box sx={{ ...backgroundImageStyle, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.2 }} />
      <Box sx={{ textAlign: "center", marginTop: 4, position: "relative" }}>
        <Typography variant="h4" component="h2">
          {userName}의
        </Typography>
        <Typography variant="h6" component="p">
          Home-BTI 결과는
        </Typography>
        <Typography variant="h3" component="p" color="primary" fontWeight="bold">
          {randomSeason.name}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {randomSeason.description}
        </Typography>
        <Typography variant="h6" component="p" sx={{ marginTop: 3 }}>
          당신과 잘 맞지 않는 Home-BTI:
        </Typography>
        <Typography variant="subtitle1" component="p" color="error">
          {mismatchedSeasons[0].name}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color="text.secondary"
          sx={{ marginTop: 3 }}
        >
          집 주소를 입력해주시면 차후 1인 가구 안전을 위한 앱 개발에 사용됩니다.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default ResultsPage;