import { useSimpleHookExample } from 'hooks/simpleHookExample';
import React from 'react'

describe("SimpleHookExample test", () => {
  test("handle", () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((initialState) => [initialState, setState]);
    const { handleChange, comment } = useSimpleHookExample();
    expect(comment).toBe("");

    handleChange("test");
    expect(setState).toHaveBeenCalledWith("test")

    jest.clearAllMocks();
    handleChange("balbi");
    expect(setState).not.toHaveBeenCalled()

  })
});
