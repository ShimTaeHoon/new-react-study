import data from "./data";
import { NavLink } from 'react-router-dom';

function Movies() {
  
  let lis = [];

  for(let t of data){    
    lis.push(<li key={t.id}><NavLink to={`/movie/${t.id}`}>{t.title}</NavLink></li>);
  }

  return (
    <div>
      <h2>Movie List</h2>
        <ul>
          {lis}
        </ul>
    </div>
  );
}

export default Movies;