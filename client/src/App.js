// Import required modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import required pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import NotFound from "./pages/NotFound";
// Import css
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rooms" exact element={<Rooms />} />
          <Route path="/room" exact element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
