const { default: comments, addComment } = require("./comments");

describe("test comments reducer", () => {
  test("addComment", () => {
    const r = comments([], addComment({ comment: 'TESTE' }));
    expect(r[0].comment).toBe("TESTE");
  });

  test("unknow action", () => {
    const r = comments([], { type: 'unknow', payload: '' });
    expect(r.length).toBe(0);
  });
});