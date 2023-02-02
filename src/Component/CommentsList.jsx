import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.commentsArray &&
          this.props.commentsArray.length > 0 &&
          this.props.commentsArray.map((comment) => (
            <SingleComment
              commentData={comment}
              key={this.props.commentsArray._id}
            />
          ))}
      </ListGroup>
    );
  }
}

export default CommentsList;
