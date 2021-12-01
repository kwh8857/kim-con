import React from "react";
import styled from "styled-components";
import Bottom from "./components/Bottom";
import Top from "./components/Top";
const Wrapper = styled.section``;
function Fund() {
  return (
    <Wrapper>
      <Top />
      <Bottom />
    </Wrapper>
  );
}

export default Fund;
