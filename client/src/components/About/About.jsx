import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
const Wrapper = styled.div`
  padding-top: 64px;
`;
function About() {
  return (
    <Wrapper>
      <header>
        <Header isScroll={true} />
      </header>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <div style={{ backgroundColor: "red" }}>
        <video width={400} autoPlay loop muted>
          <source src="/assets/about/test.mov" type="video/mp4" />
        </video>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default About;
