import './App.css';
import answers from './anwers';
import Eightball from './Eightball';

/** App top level component
 *
 * No props or state.
 *
 * App --> Eightball(props=answers)
 */

function App() {
  return (
    <div className="App">
      <Eightball answers={answers} />
    </div>
  );
}

export default App;
