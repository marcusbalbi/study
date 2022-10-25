import { useState } from "react";
import { addComment } from "../redux/reducers/comments";
import { useDispatch } from "../redux";

export const CommentBox = () => {
  const [comment, setComment] = useState();

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ comment }))
    setComment("");
  }

  return <div data-testid="CommentBox">
    <form onSubmit={handleSubmit}>
      <h4>Add Comment</h4>
      <textarea data-testid="CommentBox-textarea" value={comment} onChange={(e) => { setComment(e.target.value) }} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  </div>;
};
