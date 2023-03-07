

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/index";
import View from "./components/ViewRecords/index";
import About from "./components/Aboutus/index";
import Thankyou from "./components/Common/Thankyou";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/view-records" element={<View />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
