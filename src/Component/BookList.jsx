import { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
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
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search your book here"
            value={this.state.searchQuery}
            onChange={(e) => {
              console.log("letter inputted!", e.target.value);
              this.setState({ searchQuery: e.target.value });
            }}
          />
        </Form.Group>
        {this.state.searchQuery ? (
          <div>
            {this.state.searchQuery.length > 2 && (
              <div>
                <h4>Searched Books</h4>
                <Row>
                  {this.state.selectedBookCategory
                    .filter((selectedBook) => {
                      // console.log(selectedBook);
                      return selectedBook.title
                        .toLowerCase()
                        .includes(this.state.searchQuery);
                    })
                    .map((selectedBook) => (
                      <Col
                        xs={12}
                        sm={12}
                        md={4}
                        lg={3}
                        className="d-flex mb-lg-4 mb-md-4 mb-sm-3 mb-xs-3"
                        key={selectedBook.asin}
                      >
                        <SingleBook singleBook={selectedBook} />
                      </Col>
                    ))}
                </Row>
              </div>
            )}
          </div>
        ) : (
          <div>
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
              {this.state.selectedBookCategory
                .slice(0, 12)
                .map((currentBook) => {
                  return (
                    <Col
                      key={currentBook.asin}
                      xs={12}
                      sm={12}
                      md={4}
                      lg={3}
                      className="d-flex mb-lg-4 mb-md-4 mb-sm-3 mb-xs-3"
                    >
                      <SingleBook singleBook={currentBook} />
                    </Col>
                  );
                })}
            </Row>
          </div>
        )}
      </Container>
    );
  }
}

export default BookList;
