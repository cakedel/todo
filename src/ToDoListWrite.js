import React from "react";

const ToDoListWrite = ({
  list,
  input,
  handleInput,
  handleList,
  inputTitle,
}) => {
  return (
    <div>
      <div>{console.log(list)}</div>
      <div>
        <input
          type="text"
          onChange={handleInput}
          //input의 객채{} 값 안에 input 객체안의 key값을 넣어준 뒤
          // 객체의 [key] 값을 받아오는 방법 중 하나로 객체.key, 객체[key]
          // input에 입력한 value값을 넣어준다.
          name="title"
          value={input.title}
          ref={inputTitle}
        ></input>
      </div>
      <div>
        <input
          type="text"
          onChange={handleInput}
          name="content"
          value={input.content}
        ></input>
      </div>
      <div>
        <button onClick={handleList}>WRITE</button>
      </div>
    </div>
  );
};

export default ToDoListWrite;
