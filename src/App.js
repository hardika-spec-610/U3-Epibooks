import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllTheBooks from "./Component/AllTheBooks";
import MyNav from "./Component/MyNav";
import Welcome from "./Component/Welcome";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
    </div>
  );
}

export default App;
