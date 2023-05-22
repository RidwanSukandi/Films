import "./App.css";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Detail";
import Genres from "./pages/Genres";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {" "}
          <Route path="/" element={<Dashboard />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="genres/:id" element={<Genres />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
