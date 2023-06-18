import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home'
import Profile from "./pages/Profile";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Error404 from "./pages/Error404";

function App() {
  return (
   
     <Router>
      <ScrollToTop/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="*" element={<Error404 />} />
      </Routes>
     </Router>
   
  );
}

export default App;
