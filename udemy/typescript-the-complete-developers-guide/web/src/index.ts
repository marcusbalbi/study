import { User } from "./models/User";

// const user = new User({ name: "Balbi", age: 32 });

// user.on("change", () => {
//   console.log("hello from handler 1");
// });
// user.on("change", () => {
//   console.log("hello from handler 1");
// });

// console.log(user.get("name"));
// user.set({ age: 27, name: "Marcus Balbi" });
// console.log(user.get("age"));
// console.log(user.get("name"));

// console.log(user);

const user = new User({ name: "new user", age: 45 });

user.save();
