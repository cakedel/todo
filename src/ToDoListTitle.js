import React from "react";

const ToDoListTitle = ({ list, setList }) => {
  const handleRemove = (id) => {
    setList(list.filter((it) => id !== it.id));
  };
  return (
    <div>
      <h2>TO DO LIST</h2>
      <ul>
        {list.map((li, idx) => {
          return (
            <li key={idx}>
              {li.title}
              {li.content}
              <button onClick={() => handleRemove(li.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoListTitle;
