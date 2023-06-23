import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

function List() {
  let todos = [];
  todos = useSelector((state) => {
    return state.todo.todos;
  });
  console.log(todos);

  return (
    <StOuterBox>
      <h2>Working...🔥</h2>
      <StInBox>
        {todos.map((todo) => (
          <StListBox>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </StListBox>
        ))}
      </StInBox>

      <h2>Done...🎉</h2>
      <StInBox>
        {todos.map((todo) => (
          <StListBox>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
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
