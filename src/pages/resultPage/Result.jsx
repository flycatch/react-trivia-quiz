import { useLocation } from "react-router-dom";

export const Result = () => {
  const location = useLocation();
  const myParam = new URLSearchParams(location.search);
  const totalQuestions = myParam.get("total-questions");

  return (
    <div className="baseLayout">
      <span>Total number of questions {totalQuestions}</span>
    </div>
  );
};
