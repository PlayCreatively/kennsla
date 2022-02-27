import Diffrun from "Content/Diffrun";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stærðfræði from "Stærðfræði";

function App() {
  return (
    <Router>
      <nav>
        <a href="/">Stærðfræði</a>
        <a href="/diffrun">Diffrun</a>
      </nav>
      <Routes>
        <Route path="/" element={<Stærðfræði />} />
        <Route path="/diffrun" element={<Diffrun />} />
        <Route path="*" element={<p>no page</p>} />
      </Routes>
    </Router>
  );
}

export default App;
