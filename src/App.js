import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Instructions from './pages/Instructions';
import Acknowledgements from './pages/Acknowledgements';
import ToolStart from './pages/ToolStart';
import ToolIntro from './pages/ToolIntro';
import GlossaryPage from './pages/GlossaryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ToolIntro />} />
            <Route path="/eTool" element={<ToolIntro />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/tool" element={<ToolIntro />} />
            <Route path="/tool/phase/:phaseId/activity/:activityId/step/:stepId" element={<ToolStart />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/acknowledgements" element={<Acknowledgements />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
