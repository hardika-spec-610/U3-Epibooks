import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.commentsArray.map((comment) => (
          <SingleComment commentData={comment} />
        ))}
      </ListGroup>
    );
  }
}

export default CommentsList;
