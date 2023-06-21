import React, { useState } from "react";
import styled from "styled-components";

const Search = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //onChange title
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  //onChange body
  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  return (
    <StAddForm>
      <StAddBox>
        <StFormTitle>제목</StFormTitle>
        <StAddInput type="text" value={title} onChange={titleChangeHandler} />
        <StFormTitle>내용</StFormTitle>
        <StAddInput type="text" value={body} onChange={bodyChangeHandler} />
      </StAddBox>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Search;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

const StAddBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormTitle = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

const StAddInput = styled.input`
  width: 240px;
  height: 38px;
  border: none;
  border-radius: 15px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  width: 138px;
  height: 38px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: teal;
  color: white;
  font-weight: 700;
`;
