  import logo from './logo.svg';
  import './App.css';
  import { Routes, Route, NavLink } from 'react-router-dom';
  import Home from './componenet/Home';
  import Movie from './componenet/Movie';
  import Movies from './componenet/Movies';

  function App(){
    
    return (
   
      <div> 
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/movies'>Movie</NavLink></li>
        </ul>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/movies/*' element={<Movies></Movies>}></Route>
          <Route path='/movie/:movie_id' element={<Movie></Movie>}></Route>
        </Routes>
      </div>
    );
  }

  export default App;
