import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import SkillsSection from "./Components/SkillsSection";
import CourseList from "./Components/CourseList";
import AISection from "./Components/AISection";
import TrustedCompanies from "./Components/TrustedCompanies";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <SkillsSection />
      <AISection />
      <CourseList />
      
      <TrustedCompanies />
      <Footer />
    </div>
  );
}

export default App;
