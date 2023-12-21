import { useState } from "react";
import { QuestionOption } from "../../components/QuestionOption";
import { QUIZ_CONSTANTS } from "../../constants/data";
import "./quiz.css";

export const Quiz = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  console.log("selectedAnswer", selectedAnswer);
  //   console.log("answerRecieved", answerRecieved);

  return (
    <div className="baseLayout ">
      {QUIZ_CONSTANTS.map((data, index) => {
        return index + 1 === questionCount ? (
          <QuestionOption
            key={index}
            question={data.question}
            options={data.options}
            handleSubmit={setSelectedAnswer}
            // setAnswerRecieved={setAnswerRecieved}
            setQuestionCount={setQuestionCount}
            questionCount={questionCount}
            correctAnswer={data.correctOption}
          />
        ) : null;
      })}
    </div>
  );
};
