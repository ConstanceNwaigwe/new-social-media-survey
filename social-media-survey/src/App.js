import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SurveyPage } from "../src/pages/SurveyPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyPage />}></Route>
        <Route exact path="/confirmation" element={<ConfirmationPage />} />
        <Route path="*" element={<SurveyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
