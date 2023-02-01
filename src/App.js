import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import AllTheBooks from "./Component/AllTheBooks";
import BookList from "./Component/BookList";
import Footer from "./Component/Footer";
import MyNav from "./Component/MyNav";
import Welcome from "./Component/Welcome";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList />
      {/* <AllTheBooks /> */}
      <Footer />
    </div>
  );
}

export default App;
