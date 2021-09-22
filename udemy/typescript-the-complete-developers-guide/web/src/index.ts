import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Balbi", age: 25 });

const el = document.getElementById("root");

if (el) {
  const userForm = new UserForm(el, user);
  userForm.render();
} else {
  throw new Error("Element root not found!");
}

// import { Collection } from "./models/Collection";
// import { User, UserProps } from "./models/User";

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

// const user = User.buildUser({ name: "new user", age: 45 });

// user.on("change", () => {
//   console.log("user changed!");
// });

// user.set({ age: 32 });

// user.save();

// const collection = User.buildUserCollection();

// collection.on("change", () => {
//   console.log(collection.models);
// });

// collection.fetch();
