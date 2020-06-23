import React from 'react';
import Navbar from "./components/Navbar";
import Todos from "./views/Todos";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="container">
            <div className="mt-5">
                <Todos/>
            </div>
        </div>
    </div>
  );
}

export default App;
