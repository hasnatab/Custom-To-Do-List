import React from "react";

function RenderItems(props) {
  const items = props.listItems;
  return (
    <div>
      <ul>
        {items.map((toDoItem) => {
          return <li>{toDoItem}</li>;
        })}
      </ul>
    </div>
  );
}

export default RenderItems;
