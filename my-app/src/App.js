import logo from './logo.svg';
import './App.css';
document.title = "Conch Simulator"

function App() {
  return (
    
    <div className="App">
      <div>
      <h1>The magic conch! A conch brother</h1>
      <img src="images/conch.png"></img>
      </div>
      <div>
      <form>
  <label>
    Ask your Question:
    <input type="text" name="question" />
  </label>
  <input type="submit" value="Ask" />
</form>
      </div>
    </div>
  );
}

export default App;
