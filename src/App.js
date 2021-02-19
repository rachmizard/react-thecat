import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { NavigationBar } from "./components/layouts/NavigationBar";
import { Favourites } from "./pages/Favourites";
import { Main } from "./pages/Main";

function App() {
  return (
    <main>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/favourites" component={Favourites} />
        </Switch>
      </div>
    </main>
  );
}

export default App;
