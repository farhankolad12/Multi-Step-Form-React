import "./App.css";
import ProgressBar from "./components/ProgressBar";
import FormBar from "./components/FormBar";
import LevelContext from "./context/LevelContext";

function App() {
  return (
    <div className="main">
      <LevelContext>
        <ProgressBar />
        <FormBar />
      </LevelContext>
    </div>
  );
}

export default App;
