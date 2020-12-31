import React, { useState } from "react";
import RenderItems from "./RenderItems";

function AddItem() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  return (
    <div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add Items"
          value={inputText}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>

      <RenderItems listItems={items} />
    </div>
  );
}

export default AddItem;
