import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const questions = [
  "나는 집에 있는 것을 더 좋아한다.",
  "우리 집 앞에 CCTV가 많다.",
  "집을 정리하고 꾸미는걸 좋아한다.",
  "친구들을 집에 불러 노는걸 좋아하는 편이다.",
  "자기 위해 불을 끄고 누워도 밖이 밝다."
];

const options = [1, 2, 3, 4, 5];

const CenteredFormLabel = styled(FormLabel)`
  text-align: center;
  font-size: 24px;
`;

function TestPage() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const navigate = useNavigate();

  const handleAnswerChange = (e, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = parseInt(e.target.value);
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results");
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ backgroundColor: "#fceadc", borderRadius: "10px", padding: "20px", width: "100%" }}>
          
          <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <FormControl
                component="fieldset"
                key={index}
                sx={{ marginBottom: 2, width: "100%" }}
              >
                <CenteredFormLabel>{question}</CenteredFormLabel>
                <RadioGroup
                  row
                  name={`question-${index}`}
                  value={answers[index] || ""}
                  onChange={(e) => handleAnswerChange(e, index)}
                  sx={{ justifyContent: "center" }}
                >
                  {options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ))}
            <Button type="submit" variant="contained" color="primary" sx={{ display: "block", margin: "0 auto", marginTop: 2 }}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

export default TestPage;
