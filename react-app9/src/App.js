import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {

  // 
  return (
    <header>
      <h1><a href='/' onClick={
        (event) => {
          event.preventDefault();
          props.onChangeMode();
        }
      }>{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {

    const lis = [];

    for(let t of props.topics){

      // 
      lis.push( <li key={t.id}>
        <a href={'/read/' + t.id} id={t.id} onClick={
          (event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }
        }> 
          {t.title}
        </a>
        </li> );

  }

  return (
    <ol>
      {lis}
    </ol>
  );
}

function Article(props) {
  
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Create(props) {

  return(
    <article>
      <h2>Create</h2>

      <form onSubmit={
        (event)=>{
          event.preventDefault(); 
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }
      }>
        <p>
        <input type='text' name='title' placeholder='title'></input>
        </p>
        <p>
          <textarea name='body' placeholder='body'></textarea>
        </p>
        <p>
          <input type='submit' value='Create'></input>
        </p>
      </form>
    </article>
  );
}

// 수정 화면을 반환하는 컴포넌트
function Update(props) {

  console.log(props)

  // props로 전달받은 데이터를 state로 변경
  const [title, setTitle] = useState(props.title); //초기값
  const [body, setBody] = useState(props.body); //초기값

  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        
        {/* Props로 전달받은 데이터를 입력필드에 설정 */}
        <p>
          <input
            type='text'
            name='title'
            value={title}
            placeholder='title'
            onChange={(event) => {
              // 사용자가 값을 변경하면 state를 업데이트
              setTitle(event.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name='body'
            value={body} 
            placeholder='body'
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type='submit' value='Update' />
        </p>
      </form> {/* form 닫기 태그 추가 */}
    </article>
  );
}

function App() {
  
  let [ mode, setMode ] = useState('WELCOME'); //초기값
  let [ id, setId ] = useState(null);
  let [ nextid, setNextid ] = useState(4);
  let content = null;

  let [ topics, setTopics ] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]);

  let contextControl = null;
  
  if (mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if(mode === "READ"){

    let title, body = null;
    for(let t of topics){
      
      if(t.id === Number(id)){ 
        title = t.title;
        body = t.body;
      }
    }
    
    content = <Article title={title} body={body}></Article>

    // 모드가 Read일 경우, 수정 링크 생성
    contextControl = 
      <a className='update-a' href={'/update/' + id} onClick={
          (event)=>{
            event.preventDefault(); // 페이지 이동 방지
            setMode('UPDATE'); // 수정 모드로 전환
          }
        }>Update</a>

  } else if(mode === "CREATE") {
      content = <Create onCreate={
        (title, body)=>{
          
          // 기존 배열을 복사하여 새로운 배열로 생성
          const newTopics = [...topics];
          
          let newTopic = { id: nextid, title:title, body:body }
          
          newTopics.push(newTopic);

          // setTopics(topics); // topics state를 업데이트 
          setTopics(newTopics); // 100번지 -> 200번지
          setMode('READ');
          setId(nextid);
          setNextid(nextid + 1);

        }
      }>

      </Create>
  
  // 모드가 UPDATE로 전환되면 수정폼을 표시
  } else if(mode === "UPDATE") {  
    
    // 해당 Topic의 데이터를 Update 컴포넌트로 전달

    let title, body = null;

    // id가 일치하는 topic 찾기
    for(let t of topics){
      
      console.log(t.id, id); // 각 요소의 id와 현재 id 비교

      if(t.id === Number(id)){
        title = t.title;
        body = t.body;
      }
    }
    
    // props를 통해 Update 컴포넌트에 title, body
    // Topic을 수정하는 이벤트 기능 추가
    content = <Update title={title} body={body}
      onUpdate={(title, body)=>{
        
        // 기존 배열을 복사하여 새로운 배열을 생성
        const newTopics = [ ...topics ];

        // 전달받은 데이터로 기존 topic을 교체
        const updateTopic = { id: Number(id), title: title, body: body}

        // topics 배열에서 해당 id와 일치하는 topic을 찾아서 교체
        for(let i in newTopics){
          if(newTopics[i].id === Number(id)){

            // id가 일치하면 요소를 교체
            newTopics[i] = updateTopic;
            
          }
        }
        // setTopics(topics); // 100번지 -> 100번지
        setTopics(newTopics); // 100번지 -> 200번지
        setMode('READ'); // 모드 전환 (수정 -> 조회)
      }}
    ></Update>
  }

  return (
    <div>
      {/* Header를 클릭하면 모드가 WELCOME으로 변경 */}
      <Header title="Web" onChangeMode={
        () => {
          setMode('WELCOME');
        }
      }></Header>
      {/* Nav 클릭하면 모드가 READ로 변경 */}
      <Nav topics={topics} onChangeMode={
        (id) => {
          setMode('READ');
          setId(id);
        }
      }></Nav>

      {/* 동적으로 생성 */}
      {content} 

      {/* 등록폼으로 이동하는 링크 */}
      <a href="/create" onClick={
        (event)=>{
          event.preventDefault(); // 다른 페이지로 이동하는 것을 방지
          setMode('CREATE'); // 모드 전환
        }
      }>Create</a>

      {contextControl}
    
    </div>
  );
}

export default App;