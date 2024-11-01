import data from './data.json';
import { NavLink, useParams } from 'react-router-dom';

function Movie() {
    
  let params = useParams();

  console.log(params);

  let lis = [];

  // 배열의 find 함수로 해당 id와 일치하는 영화 데이터 찾기
  // find함수는 배열의 요소만큼 반복되면서
  // true가 반환되면 요소가 추출됨

  let findMovie = data.find( (movie) =>{
    if(movie.id === Number(params.movie_id)){
      return true;
    }
  });

  for(let t of data){
    
    lis.push(
      <li key={t.id}><NavLink to={'/movies/' + t.id}>{t.title}</NavLink></li>
    );
  }

  return (
    <div>
      <h3>{findMovie.title}</h3>
      <h5>{findMovie.description}</h5>
      <img src={findMovie.poster}></img>
    </div>
  );

}

export default Movie;