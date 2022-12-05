import { fireEvent, render, screen } from "@testing-library/react";
import { CommentBox } from "components/CommentBox";
import { AppReduxProvider, createStore } from "../../redux";

describe("CommentBox tests", () => {
  const store = createStore();
  test("should render a textarea and a button", () => {
    const { unmount } = render(
      <AppReduxProvider store={store}>
        <CommentBox />
      </AppReduxProvider>
    );
    const textarea = screen.queryByTestId("CommentBox-textarea");
    const button = screen.queryByText("Submit Comment");
    expect(textarea).not.toBeNull();
    expect(button).not.toBeNull();
    unmount();
  });
  test("should submit a comment", () => {
    const { unmount } = render(
      <AppReduxProvider store={store}>
        <CommentBox />
      </AppReduxProvider>
    );
    const textarea = screen.queryByTestId("CommentBox-textarea");
    const button = screen.queryByText("Submit Comment");
    fireEvent.change(textarea, { target: { value: "New Comment" } });
    expect(textarea.value).toBe("New Comment");
    fireEvent.click(button);
    expect(textarea.value).toBe("");
    unmount();
  });
});