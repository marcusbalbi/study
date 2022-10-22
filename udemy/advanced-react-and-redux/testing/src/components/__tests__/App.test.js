import { render, screen } from "@testing-library/react";
import App from "components/App";
import React from "react";

describe("App.test.js", () => {
  beforeEach(() => {
    // console.log('before!')
  })
  it("should find by data-testid", async () => {
    const { unmount } = render(<App />);
    expect(await screen.findByTestId("CommentList")).toBeTruthy();
    expect(await screen.findByTestId("CommentBox")).toBeTruthy();
    unmount();
  });
});
