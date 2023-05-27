import './App.css';
import FirstPage from './component/FirstPage';
import Education from './component/Education';
import Skill from './component/Skills';
import WorkExperience from './component/work';
import Project from './component/project';
import Certifications from './component/Certificates';
import About from './component/about';
function App() {
  return (
    <div id='main'>
      <FirstPage/>
      <Education/>
      <Skill/>
      <WorkExperience/>
      <Project/>
      <Certifications/>
      <About/>
    </div>
  );
}

export default App;
