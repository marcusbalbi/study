import React from 'react';
import { useSelector } from '../redux';

export const CommentList = () => {
  const { comments } = useSelector((state) => {
    return {
      comments: state.comments
    }
  });

  const renderComments = () => {
    return comments.map((c, idx) => {
      return <li key={idx}>{c.comment}</li>;
    });
  }

  return <div data-testid="CommentList">
    <ul>
      {renderComments()}
    </ul>
  </div>;
}