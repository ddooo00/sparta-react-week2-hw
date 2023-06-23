import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/modules/todo";

function List() {
  let todos = [];
  todos = useSelector((state) => {
    return state.todo.todos;
  });

  const dispatch = useDispatch();

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <StOuterBox>
      <h2>Working...🔥</h2>
      <StInBox>
        {todos.map((todo) => (
          <StListBox key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <button>완료</button>
            <button onClick={() => deleteTodoHandler(todo.id)}>삭제</button>
          </StListBox>
        ))}
      </StInBox>

      <h2>Done...🎉</h2>
      <StInBox>
        {todos.map((todo) => (
          <StListBox key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <button>취소</button>
            <button>삭제</button>
          </StListBox>
        ))}
      </StInBox>
    </StOuterBox>
  );
}

export default List;

const StOuterBox = styled.div`
  margin-top: 20px;
  // background-color: yellow;
`;
const StInBox = styled.div`
  gap: 12px;
  display: flex;
  flex-wrap: wrap;
`;

const StListBox = styled.div`
  margin-bottom: 10px;
  width: 250px;
  height: 160px;
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;
