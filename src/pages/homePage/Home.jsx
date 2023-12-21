import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("quiz");
  };
  return (
    <div className="baseLayout homeContainer">
      <span>Welcome to React Trivia Quiz</span>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};
