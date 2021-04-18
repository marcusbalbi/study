import { useEffect, useState } from "react"
const myItems = [
  {
    title: "What is React ?",
    content: "React is a Frontend javascript Framework",
  },
  {
    title: "Why use React ?",
    content: "React is a Favorite JS library among Frontend Engenieers",
  },
  {
    title: "How do you use React ?",
    content: "You use React by Creating components",
  },
];

const useItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setItems(myItems);
  },[])
  return {
    items,
    selectedItem,
    setSelectedItem,
  };
}

export default useItems;