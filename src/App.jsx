import "./App.css";
import Home from "./HOME/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./COURSES/Courses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
