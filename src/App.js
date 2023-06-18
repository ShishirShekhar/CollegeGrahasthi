import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import Other from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rooms" exact element={<Rooms />} />
          <Route path="*" element={<Other />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
