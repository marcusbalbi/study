import React from 'react';
import { useSelector } from '../redux';

export const CommentList = () => {
  const { comments } = useSelector((state) => {
    return {
      comments: state.comments
    }
  })
  return <div data-testid="CommentList">{JSON.stringify(comments)}</div>;
}