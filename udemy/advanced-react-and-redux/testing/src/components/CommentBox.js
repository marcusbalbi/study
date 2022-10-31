import { useState } from "react";
import { addComment } from "../redux/reducers/comments";
import { useDispatch } from "../redux";
import { loadComments } from "redux/actions/loadComments";

export const CommentBox = () => {
  const [comment, setComment] = useState();

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ comment }))
    setComment("");
  }

  const handleLoadComments = (e) => {
    e.preventDefault();
    dispatch(loadComments());
  }

  return <div data-testid="CommentBox">
    <form onSubmit={handleSubmit}>
      <h4>Add Comment</h4>
      <textarea data-testid="CommentBox-textarea" value={comment} onChange={(e) => { setComment(e.target.value) }} />
      <div>
        <button>Submit Comment</button>
        <button onClick={handleLoadComments}>Load Comments</button>
      </div>
    </form>
  </div>;
};
