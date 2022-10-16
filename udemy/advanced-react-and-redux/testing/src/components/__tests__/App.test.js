import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

describe("App.test.js", () => {
  it("shows a comment box", async () => {
    const { unmount } = render(<App />)
    expect(await screen.findByText("CommentBox")).toBeTruthy();
    unmount();
  });
});
