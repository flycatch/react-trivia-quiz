import { useState } from "react";
import { QUIZ_CONSTANTS } from "../constants/data";

/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { VerifyAnswer } from "./VerifyAnswer";

export const QuestionOption = ({
  question,
  options,
  handleSubmit,
  //   setAnswerRecieved,
  setQuestionCount,
  questionCount,
  correctAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [answerRecieved, setAnswerRecieved] = useState(false);

  const navigate = useNavigate();
  const handleAnswerSubmit = () => {
    handleSubmit(selectedOption);
    // setAnswerRecieved(true);
    setQuestionCount((prev) => {
      return prev + 1;
    });
    setAnswerRecieved(false);
    if (questionCount === QUIZ_CONSTANTS.length) {
      navigate(`/result?total-questions=${QUIZ_CONSTANTS.length}`);
    }
  };
  const handleRadioChange = (e) => {
    // console.log("event", e.target.value);
    setSelectedOption(e.target.value);
    setAnswerRecieved(true);
  };
  return (
    <div className="questionLayout">
      <span>{question}</span>
      {options &&
        options?.map((value, index) => (
          <div key={index}>
            <input
              name="options"
              id="option"
              type="radio"
              value={value}
              onChange={(e) => handleRadioChange(e)}
            />
            <label htmlFor="option">{value}</label>
          </div>
        ))}
      <button
        disabled={selectedOption.length ? false : true}
        onClick={() => handleAnswerSubmit()}
      >
        {questionCount === QUIZ_CONSTANTS.length ? "See Results" : "Next"}
      </button>

      <div>
        {answerRecieved &&
          selectedOption &&
          options.map((option, index) => (
            <VerifyAnswer
              key={index}
              option={option}
              className={
                correctAnswer == selectedOption ? "colorGreen" : "colorRed"
              }
            />
          ))}
      </div>
    </div>
  );
};
