import { Component } from "react";
import CommentsList from "./CommentsList";

let options = {
  method: "GET",
  headers: new Headers({
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzQ1NTYzNjgsImV4cCI6MTY3NTc2NTk2OH0.oOhKfDMa6Rrq8nZX2NU7dxrUGXvr2aQdXLOkGapH9UE",
  }),
};

class CommentArea extends Component {
  state = {
    comment: [],
  };

  getComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asinID,
        options
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log("data", data);
        this.setState({ comment: data });
      } else {
        alert("Something wrong");
      }
    } catch (e) {
      console.error(e);
    }
  };

  componentDidMount() {
    this.getComments();
  }
  render() {
    return (
      <div className="p-2">
        <h4>Comments</h4>
        {this.state.comment && this.state.comment.length > 0 ? (
          <CommentsList commentsArray={this.state.comment} />
        ) : (
          "Not comment yet"
        )}
        {/* {this.state.comment && this.state.comment.length > 0 && (
          <CommentsList commentsArray={this.state.comment} />
        )} */}
      </div>
    );
  }
}

export default CommentArea;
