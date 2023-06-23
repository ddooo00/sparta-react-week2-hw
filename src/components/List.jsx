import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

function List() {
  const todos = useSelector((state) => {
    return state.todo.todos;
  });
  console.log(todos);

  return (
    <StBox>
      {todos.map((todo) => (
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.body}</p>
        </div>
      ))}
    </StBox>
  );
}

export default List;

const StBox = styled.div`
  border: 1px solid black;
`;
