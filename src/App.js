import React from 'react';
import './App.css';
import TodoList from './components/TodoList.js'; // Assuming you have a TodoList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React
        </a>
      </header>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
