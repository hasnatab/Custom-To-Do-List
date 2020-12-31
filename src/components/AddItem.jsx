import React, { useState } from "react";

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

      <div>
        <ul>
          {items.map((toDoItem) => {
            return <li>{toDoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default AddItem;
