import SongOverview from "./components/SongOverview";
import Nav from "../src/components/Nav";
import About from "./components/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/playlist" element={<SongOverview />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
