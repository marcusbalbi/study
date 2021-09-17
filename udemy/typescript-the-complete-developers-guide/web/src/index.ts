import { User } from "./models/User";

const user = new User({ name: "Balbi", age: 32 });

console.log(user.get("name"));
