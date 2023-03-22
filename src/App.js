import "./App.css";
import { Projects, Footer, Header, Courses, Education } from "./containers";
import { Skills, Navbar, SocialMedia } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Projects />
      <SocialMedia />
      <Courses />
      <Education />
      <Skills />
      <Footer />
      <h1>Portfolio</h1>
    </div>
  );
}

export default App;
