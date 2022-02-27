import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stærðfræði from "Stærðfræði";

function App() {
  return (
    <Router>
      <nav>
        <a href="/">Stærðfræði</a>
        <a href="/graf">Graf</a>
      </nav>
      <Routes>
        <Route path="/" element={<Stærðfræði />} />
        <Route path="*" element={<p>no page</p>} />
      </Routes>
    </Router>
  );
}

export default App;
