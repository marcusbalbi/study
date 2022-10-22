import { useState } from 'react';

export const useSimpleHookExample = () => {
  const [comment, setComment] = useState("");

  const handleChange = (newValue) => {
    if (newValue !== "balbi") {
      setComment(newValue);
    }
  };

  return {
    comment,
    handleChange
  }
}

