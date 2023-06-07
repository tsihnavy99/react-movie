import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail/>}/>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
      </Routes>
  </Router>
}

export default App;

/* toDo 리스트 form 사용 등
function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo==='') {
      return;
    }
    setToDos((current) => [toDo, ...current]);
    setToDo('');
  }
  console.log(toDos);
  const delToDo = (event) => {
    setToDos(toDos.filter((_, index) => index!==parseInt(event.target.id))); 
  }
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type='text' placeholder="Write your to do.." />
        <button type='submit'>Submit</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => {
          return <li key={index}><button id={index} className={item} onClick={delToDo}>Delete</button> {item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
*/