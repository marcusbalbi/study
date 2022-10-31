import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import App from "components/App";
import moxios from "moxios";
import React from "react";

describe("Comments Integration tests", () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
      status: 200,
      response: [
        {
          name: "id labore ex et quam laborum",
        },
        {
          name: "quo vero reiciendis velit similique earum",
        },
      ],
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("fetch list of comments and display", async () => {
    const view = render(<App />);

    const loadCommentsButton = screen.getByText("Load Comments");
    const list = screen.queryByTestId("CommentList-ul");

    expect(list.innerHTML).toBe("");

    fireEvent.click(loadCommentsButton);

    await waitFor(() => {
      expect(list.innerHTML).not.toBe("");
    });
    view.unmount();
  });
});
