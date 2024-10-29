import logo from './logo.svg';
import './App.css';

// 일반함수
// 사용자정의함수 - 컴포넌트: html 태그를 만들어서 반환

function Item() {
  return (
    <header>
      Item Component
    </header>
  );
}

function Home() {
  return (
    <span>Home</span>
  );
}

function About() {
  return (
    <span>About</span>
  );
}

function Contact() {
  return (
    <span>Contact</span>
  );
}

function Content() {
  return(
    <p>Content Component</p>
  );
}

function Section() {
  return(
    <div>
    <h1>Section Component</h1>
    <Content></Content>
    <Content></Content>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Item List</h1>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <br></br>
      <h1>Navigation</h1>
      <Home></Home>
      <br></br>
      <About></About>
      <br></br>
      <Contact></Contact>
      <br></br>

      <Section></Section>
      <Section></Section>
    </div>
  );
}

export default App;
