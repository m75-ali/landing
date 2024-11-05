import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/techstack" element={<TechStack />} />
      </Routes>
    </Router>
  );
}

export default App;

