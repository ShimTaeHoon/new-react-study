import styled from "styled-components";

function Hungry() {

  // tag 기능 + css 자유롭게 작성하는 부가기능
  const HungryColor = styled.div`
  background-color: red;
  `;  

  return(
    <>
    <HungryColor>
    <h2>Hungry</h2>
    Hungry...
    </HungryColor>
    </>
  );
}

export default Hungry;