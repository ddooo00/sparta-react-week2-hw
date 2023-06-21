import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <div>My Todo List</div>
    </StHeader>
  );
};
export default Header;

const StHeader = styled.div`
  height: 60px;
  display: flex;
  border: 1px solid #ddd;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 25px;
  font-weight: 700;
`;
