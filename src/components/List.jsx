import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function List() {
  return (
    <StBox>
      <Link to="/">돌아가기</Link>
    </StBox>
  );
}

export default List;

const StBox = styled.div`
  border: 1px solid black;
`;
