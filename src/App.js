import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import AllTheBooks from "./Component/AllTheBooks";
import BookList from "./Component/BookList";
import Footer from "./Component/Footer";
import MyNav from "./Component/MyNav";
import Welcome from "./Component/Welcome";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./Component/CommmentArea";

class App extends Component {
  state = {
    asin: "",
  };
  selectedBook = (newBook) => {
    console.log("newBook", newBook);
    this.setState({ asin: newBook });
  };
  render() {
    return (
      <div className="App">
        <MyNav />
        <Welcome />
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div>
                <BookList selectedBook={this.selectedBook} />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              {" "}
              <div>
                <CommentArea bookAsin={this.state.asin} />
              </div>
            </Col>
          </Row>

          {/* <AllTheBooks /> */}
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
