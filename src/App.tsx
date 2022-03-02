import Diffrun from "Content/Diffrun";
import Vigrar from "Content/Vigrar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stærðfræði from "Stærðfræði";

function App() {
  return (
    <Router>
      <nav>
        <a href="/">Stærðfræði</a>
        <a href="/diffrun">Diffrun</a>
        <a href="/vigrar">vigrar</a>
      </nav>
      <Routes>
        <Route path="/vigrar" element={<Vigrar />} />
        <Route path="/" element={<Stærðfræði />} />
        <Route path="/diffrun" element={<Diffrun />} />
        <Route path="*" element={<p>no page</p>} />
      </Routes>
    </Router>
  );
}

export default App;
