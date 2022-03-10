import Diffrun from "Content/Diffrun";
import Vigrar from "Content/Vigrar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stærðfræði from "Stærðfræði";

function App() {
  return (
    <Router>
      <nav>
        <a href="/">Stærðfræði</a>
        <a href="/calculus">Calculus</a>
        <a href="/vigrar">Vigrar</a>
      </nav>
      <Routes>
        <Route path="/vigrar" element={<Vigrar />} />
        <Route path="/" element={<Stærðfræði />} />
        <Route path="/calculus" element={<Diffrun />} />
        <Route
          path="*"
          element={
            <p style={{ margin: "auto", fontSize: "10vh" }}>
              Þessi síða er ekki til.
            </p>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
