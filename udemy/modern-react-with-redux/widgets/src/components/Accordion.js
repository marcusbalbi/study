import React from "react";
import useItems from "../hooks/useItems";

const Accordion = () => {
  const {items, selectedItem, setSelectedItem} = useItems();
  const renderItems = () => {
    return items.map((item, i) => {
      return (
        <React.Fragment key={item.title} >
          <div className="title active" onClick={() => { onTitleClicked(i); }}>
            <i className="dropdown icon"></i>
            {item.title} - {selectedItem === i ? "SELECIONADO" : ""}
          </div>
          <div className="content active">
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    })
  }
  const onTitleClicked = (index) => {
    setSelectedItem(index);
  }
  return <div className="ui styled accordion">{renderItems()}</div>;
}


export default Accordion;