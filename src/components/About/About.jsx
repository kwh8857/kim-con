import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
const Wrapper = styled.div`
  padding-top: 64px;
`;
function About() {
  return (
    <Wrapper>
      <header>
        <Header />
      </header>
      <Section1 />
      <Section2 />
      <Section3 />
    </Wrapper>
  );
}

export default About;
