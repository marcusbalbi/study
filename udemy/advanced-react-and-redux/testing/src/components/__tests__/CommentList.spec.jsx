import { render, screen } from "@testing-library/react";
import { CommentList } from "components/CommentList";
import { AppReduxProvider, createStore } from "../../redux";

describe("CommentList tests", () => {
  test("should render empty CommentList", () => {
    const store = createStore();
    const { unmount } = render(
      <AppReduxProvider store={store}>
        <CommentList />
      </AppReduxProvider>
    );
    const list = screen.queryByTestId("CommentList-ul");
    expect(list.innerHTML).toBe("")
    unmount();
  });
  test("should render a commentList with comments", async () => {
    const store = createStore({ comments: [{ comment: 'Hi there' }] });
    const { unmount } = render(
      <AppReduxProvider store={store}>
        <CommentList/>
      </AppReduxProvider>
    );
    const list = screen.queryByTestId("CommentList-ul");
    expect(list.innerHTML).toEqual("<li>Hi there</li>");
    unmount();
  });
  test("should render a commentList with 2 or more comments", async () => {
    const store = createStore({ comments: [{ comment: 'Hi there' }, { comment: 'Hello there!' }] });
    const { unmount } = render(
      <AppReduxProvider store={store}>
        <CommentList/>
      </AppReduxProvider>
    );
    const list = screen.queryByTestId("CommentList-ul");
    expect(list.innerHTML).toEqual("<li>Hi there</li><li>Hello there!</li>");
    expect(list.childElementCount).toBe(2)
    unmount();
  });
});
