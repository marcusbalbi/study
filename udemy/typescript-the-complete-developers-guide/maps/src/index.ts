/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

console.log(user, company);

const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 5,
  center: user.location,
});


