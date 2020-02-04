import React from 'react';
import './App.css';
import ExerciseOne from './ExerciseOne.js';
import ExerciseTwo from './ExerciseTwo.js';
import ReactDOM from 'react-dom';
class App extends React.Component {


  exerciseOne(){

    ReactDOM.render(<ExerciseOne />, document.getElementById('root'));

  }

  exerciseTwo(){

    ReactDOM.render(<ExerciseTwo />, document.getElementById('root'));

  }

  render(){  
    return (
      <div className="App">
        <header className="App-header">

          <ul>
            
            <li>Exercise No.1 <button onClick={this.exerciseOne}>Exercise One</button></li>
            <li>Exercise No.2 <button onClick={this.exerciseTwo}>Exercise Two</button></li>
            <li>Exercise No.1 <button onClick={this.dirigir}>Exercise One</button></li>
            <li>Exercise No.1 <button onClick={this.dirigir}>Exercise One</button></li>
            <li>Exercise No.1 <button onClick={this.dirigir}>Exercise One</button></li>
            <li>Exercise No.1 <button onClick={this.dirigir}>Exercise One</button></li>

          </ul>

        </header>
      </div>
    );
  } 
}

export default App;
