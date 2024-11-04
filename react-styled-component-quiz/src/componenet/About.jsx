import styled from "styled-components";

const AboutColor = styled.div`
background-color: pink;
`;

function About() {

  console.log('About..');

  return(
    <>
      <AboutColor>
      <h2>About</h2>
      About...
      </AboutColor>
    </>
  );
}

export default About;