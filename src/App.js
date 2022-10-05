import React, { useRef, useState } from "react";
import ToDoListWrite from "./ToDoListWrite";
import { Route, Routes } from "react-router";
import ToDoListTitle from "./ToDoListTitle";
import { Link } from "react-router-dom";

const App = () => {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const num = useRef(1);
  const inputTitle = useRef(null);
  // 전생애주기를 통해서 불변하지 않는다.
  const handleInput = (e) => {
    const { name, value } = e.target;
    // 객체를 비구조할당
    setInput({ ...input, [name]: value, id: num.current });
  };

  const handleList = () => {
    const hangle = /^[ㄱ-ㅎ가-힣]*$/;
    if (!hangle.test(input.title)) {
      alert("한글만 입력하세요");
      setInput({
        ...input,
        title: "",
      });
      inputTitle.current.focus();
      return;
    }
    if (input.title.length < 5) {
      alert("입력 수가 짧습니다.");
      setInput({
        ...input,
        title: "",
      });
      inputTitle.current.focus();
      return;
    }

    if (input.content.length < 5) {
      alert("입력 수가 짧습니다.");
      setInput({
        ...input,
        content: "",
      });
      inputTitle.current.focus();
      return;
    }

    setList([...list, input]);
    setInput({
      title: "",
      content: "",
    });
    num.current++;
  };

  return (
    <div>
      <nav>
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/">
            <li>BOARD</li>
          </Link>
          <Link to="/">
            <li>TODO</li>
          </Link>
        </ul>
      </nav>
      <ToDoListTitle list={list} setList={setList} />
      <hr />
      <div>
        <Routes>
          <Route path="/"></Route>
        </Routes>
        <Routes>
          <Route path="/Board"></Route>
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <ToDoListWrite
                list={list}
                input={input}
                handleInput={handleInput}
                handleList={handleList}
                inputTitle={inputTitle}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
