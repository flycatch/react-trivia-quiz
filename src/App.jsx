import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/homePage/Home";
import { Quiz } from "./pages/quizPage/Quiz";
import { Result } from "./pages/resultPage/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/quiz" Component={Quiz} />
        <Route path="/result" Component={Result} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
