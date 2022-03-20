import { Routes, Route } from "react-router-dom";
import { HomePage, CharacterDetail } from "./pages";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="characterDetail:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
