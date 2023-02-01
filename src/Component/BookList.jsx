import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import SingleBook from "./SingleBook";
import "./componentStyles.css";

class BookList extends Component {
  state = {
    selectedBookCategory: fantasy,
  };
  render() {
    return (
      <Container>
        <Button
          variant="success"
          className="mr-3 mb-5"
          onClick={() => {
            this.setState({ selectedBookCategory: fantasy });
          }}
        >
          Fantasy
        </Button>
        <Button
          variant="success"
          className="mr-3 mb-5"
          onClick={() => {
            this.setState({ selectedBookCategory: history });
          }}
        >
          History
        </Button>
        <Button
          variant="success"
          className="mr-3 mb-5"
          onClick={() => {
            this.setState({ selectedBookCategory: horror });
          }}
        >
          Horror
        </Button>
        <Button
          variant="success"
          className="mr-3 mb-5"
          onClick={() => {
            this.setState({ selectedBookCategory: romance });
          }}
        >
          Romance
        </Button>
        <Button
          variant="success"
          className="mr-3 mb-5"
          onClick={() => {
            this.setState({ selectedBookCategory: scifi });
          }}
        >
          Scifi
        </Button>
        <Row>
          {this.state.selectedBookCategory.map((currentBook) => {
            return (
              <Col
                key={currentBook.asin}
                xs={12}
                sm={12}
                md={6}
                lg={3}
                className="d-flex mb-lg-4 mb-md-4 mb-sm-3 mb-xs-3"
              >
                <SingleBook singleBook={currentBook} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
