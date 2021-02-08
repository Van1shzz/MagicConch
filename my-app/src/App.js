import logo from './logo.svg';
import './App.css';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

document.title = "Conch Simulator";



function App() {
  return (
    
    <div className="App">
      <div>
      <h1>The magic conch! A conch brother</h1>
      <div>
      <img src="images/conch.png" id="conch"></img>
      <Draggable>
        <div className="drag-wrapper">
        <img src="images/ring.png" id="ring" ></img>
        </div>
      </Draggable>
      </div>

      </div>
      <div>
      <form>
  <label>
    Ask your Question:
    <input type="text" name="question" />
  </label>
  <input type="submit" value="Ask" />
  <p id="answer">Your response will appear here</p>
</form>
      </div>
    </div>
    
  );
}

export default App;
