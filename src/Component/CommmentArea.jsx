import { Component } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import AddComments from "./AddComments";
import { MdDelete } from "react-icons/md";

class CommentArea extends Component {
  state = {
    comment: [],
  };

  getComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookAsin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzQ1NTYzNjgsImV4cCI6MTY3NTc2NTk2OH0.oOhKfDMa6Rrq8nZX2NU7dxrUGXvr2aQdXLOkGapH9UE",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log("data", data);
        this.setState({ comment: [data] });
      } else {
        alert("Something wrong");
      }
    } catch (e) {
      console.error(e);
    }
  };

  deleteComment = async (commentId) => {
    try {
      await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzQ1NTYzNjgsImV4cCI6MTY3NTc2NTk2OH0.oOhKfDMa6Rrq8nZX2NU7dxrUGXvr2aQdXLOkGapH9UE",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getComments();
  }
  render() {
    return (
      <div>
        <h4>Comments</h4>
        {this.state.comment.map((data) =>
          data.map((singleComment) => (
            <Card key={singleComment._id}>
              <Card.Header>Author: {singleComment.author}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Comment: {singleComment.comment}
                </ListGroup.Item>
                <ListGroup.Item>Rating: {singleComment.rate}</ListGroup.Item>
                <ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <Button
                      variant="danger"
                      onClick={() => {
                        this.deleteComment(singleComment._id);
                      }}
                    >
                      <MdDelete />
                    </Button>
                  </ListGroup.Item>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          ))
        )}
        <AddComments bookAsin={this.props.bookAsin}></AddComments>
      </div>
    );
  }
}

export default CommentArea;
