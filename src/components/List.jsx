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
            <StButtonBox>
              <StComCanButton>완료</StComCanButton>
              <StDeleteButton onClick={() => deleteTodoHandler(todo.id)}>
                삭제
              </StDeleteButton>
            </StButtonBox>
          </StListBox>
        ))}
      </StInBox>

      <h2>Done...🎉</h2>
      <StInBox>
        {todos.map((todo) => (
          <StListBox key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <StButtonBox>
              <StComCanButton>취소</StComCanButton>
              <StDeleteButton>삭제</StDeleteButton>
            </StButtonBox>
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

const StButtonBox = styled.div`
  display: flex;
`;

const StDeleteButton = styled.div`
  background-color: #fff;
  border: 3px solid red;
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
  height: 30px;
  width: 50%;
  margin-top: 25px;
  text-align: center;
  padding-top: 10px;
`;

const StComCanButton = styled.div`
  background-color: #fff;
  border: 3px solid purple;
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
  height: 30px;
  width: 50%;
  margin-top: 25px;
  text-align: center;
  padding-top: 10px;
`;
