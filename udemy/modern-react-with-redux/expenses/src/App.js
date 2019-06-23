import React from 'react';
import './App.css';
import './firebase/firebase'

function App() {

  const getExpenses = () => {
    return null
  }
  return (
    <div className="App">
      <header className="App-header">
        {getExpenses()}
      </header>
    </div>
  );
}

export default App;
