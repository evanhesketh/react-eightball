import './App.css';
import answers from './anwers';
import Eightball from './Eightball';

function App() {
  return (
    <div className="App">
      <Eightball answers={answers}/>
    </div>
  );
}

export default App;
