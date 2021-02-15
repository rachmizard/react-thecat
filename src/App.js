import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/layouts/Navbar";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
