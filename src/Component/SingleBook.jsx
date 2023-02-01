import { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./componentStyles.css";

class singleBook extends Component {
  render() {
    return (
      <Card className="w-100 shadow-sm">
        <Card.Img
          variant="top"
          src={this.props.singleBook.img}
          alt={this.props.singleBook.title}
          height="300px"
        />
        <Card.Body>
          <Card.Title className="text-truncate">
            {this.props.singleBook.title}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{this.props.singleBook.category}</ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-between pb-0">
          <Card.Text className="font-weight-bold">Price</Card.Text>
          <Card.Text className="price-text font-weight-bold">
            {this.props.singleBook.price}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default singleBook;
