import { render, screen } from "@testing-library/react";
import App from "components/App";
import React from "react";

describe("App.test.js", () => {
  it("shows a comment box", async () => {
    const { unmount } = render(<App />);
    expect(await screen.findByText("CommentBox")).toBeTruthy();
    unmount();
  });
  it("shows a comment list", async () => {
    const { unmount } = render(<App />);
    expect(await screen.findByText("CommentList")).toBeTruthy();
    unmount();
  });
  it("should find by data-testid", async () => {
    const { unmount } = render(<App />);
    expect(await screen.findByTestId("CommentList")).toBeTruthy();
    expect(await screen.findByTestId("CommentBox")).toBeTruthy();
    unmount();
  });
});
