import Home from "./Pages/Home";
import Other from "./Pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="*" element={ <Other /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
