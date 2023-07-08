import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home'
import Profile from "./pages/Profile";
import Contact from './pages/Contact'
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Error404 from "./pages/Error404";
import BlogPost from "./pages/BlogPost";
import ContentMarketing from "./pages/ContentMarketing";
import CustomServices from "./pages/CustomServices";
import TechnicalWriting from "./pages/TechnicalWriting";
import AcademicWriting from './pages/AcademicWriting'
import SeoManagement from './pages/SeoManagement'
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";


function App() {
  return (
   
     <Router>
      <ScrollToTop/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/faq" element={<FAQ />} />
      <Route exact path="/terms-and-conditions" element={<Terms />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/services/academic-writing" element={<AcademicWriting />} />
      <Route exact path="/services/blog-post" element={<BlogPost />} />
      <Route exact path="/services/content-marketing" element={<ContentMarketing />} />
      <Route exact path="/services/custom-services" element={<CustomServices />} />
      <Route exact path="/services/seo-management" element={<SeoManagement />} />
      <Route exact path="/services/technical-writing" element={<TechnicalWriting />} />
      <Route exact path="*" element={<Error404 />} />
      </Routes>
     </Router>
   
  );
}

export default App;
