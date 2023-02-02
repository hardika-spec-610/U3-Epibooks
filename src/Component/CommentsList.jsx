import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <>
        <ListGroup>
          {this.props.commentsArray &&
            this.props.commentsArray.length > 0 &&
            this.props.commentsArray.map((comment) => (
              <SingleComment key={comment._id} commentData={comment} />
            ))}
        </ListGroup>
      </>
    );
  }
}

export default CommentsList;
