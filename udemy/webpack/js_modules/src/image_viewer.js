import "../styles/image_viewer.css";
// import big from "../assets/big.png";
import small from "../assets/small.jpeg";

// const image = document.createElement("img");
// image.src = "http://lorempixel.com.br/500/400/?1";
// document.body.appendChild(image);

// const imageBig = document.createElement("img");
// imageBig.src = big;
// document.body.appendChild(imageBig);

// const imageSmall = document.createElement("img");
// imageSmall.src = small;
// document.body.appendChild(imageSmall);


export default () => {
  const imageSmall = document.createElement("img");
  imageSmall.src = small;
  document.body.appendChild(imageSmall);
}