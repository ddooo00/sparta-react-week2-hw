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
    <StBox>
      <h2>Working...🔥</h2>
      <div style={{ gap: "12px", display: "flex", flexWrap: "wrap" }}>
        {todos.map((todo) => (
          <div
            style={{
              marginBottom: "10px",
              width: "250px",
              height: "160px",
              border: "4px solid teal",
              borderRadius: "12px",
              padding: "12px 24px 24px 24px",
            }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </div>
        ))}
      </div>
      <h2>Done...🎉</h2>
      <div style={{ gap: "12px", display: "flex", flexWrap: "wrap" }}>
        {todos.map((todo) => (
          <div
            style={{
              marginBottom: "10px",
              width: "250px",
              height: "160px",
              border: "4px solid teal",
              borderRadius: "12px",
              padding: "12px 24px 24px 24px",
            }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </div>
        ))}
      </div>
    </StBox>
  );
}

export default List;

const StBox = styled.div`
  margin-top: 20px;
`;
