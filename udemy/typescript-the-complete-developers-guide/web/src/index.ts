import { User } from "./models/User";

const user = new User({ name: "Balbi", age: 32 });

console.log(user.get("name"));
user.set({ age: 27, name: "Marcus Balbi" });
console.log(user.get("age"));
console.log(user.get("name"));

user.on("change", () => {});
user.on("change", () => {});
console.log(user);
