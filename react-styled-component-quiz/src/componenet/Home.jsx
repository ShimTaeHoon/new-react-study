import styled from 'styled-components';

// const HomeColor = styled.div`
//     background-color: skyblue;
//   `;

const HomeDiv = (props) => {
  
  const style ={ backgroundColor:'aquamarine' }

  return (
    <div style={style}>{props.children}</div>
  );
}

const Home = () => {
  
  

  return(
  <HomeDiv>
    <h1>Home</h1>
    Homepage...
  </HomeDiv>
  );
}

// function Home() {
//   return(
//     // <>
//     //   <HomeColor>
//     //   <h2>Home</h2>
//     //   Homepage...
//     //   </HomeColor>
//     // </>

//     <>
//     </>
//   );
// }

export default Home;