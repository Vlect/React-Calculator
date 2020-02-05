import React from 'react';
import './App.css';
import ExerciseOne from './ExerciseOne.js';
import ExerciseTwo from './ExerciseTwo.js';
import ExerciseThree from './ExerciseThree';
import ExerciseFour from './ExerciseFour';
import ExerciseFive from './ExerciseFive';
import ReactDOM from 'react-dom';
class App extends React.Component {


  exerciseOne(){

    ReactDOM.render(<ExerciseOne />, document.getElementById('root'));

  }

  exerciseTwo(){

    ReactDOM.render(<ExerciseTwo />, document.getElementById('root'));

  }

  exerciseThree(){

    ReactDOM.render(<ExerciseThree />, document.getElementById('root'));

  }

  exerciseFour(){

    ReactDOM.render(<ExerciseFour />, document.getElementById('root'));

  }

  exerciseFive(){

    ReactDOM.render(<ExerciseFive />, document.getElementById('root'));

  }

  render(){  
    return (
      <div className="App">
        <header className="App-header">

          <ul>
            
            <li>Exercise No.1 <button onClick={this.exerciseOne}>Exercise One</button></li>
            <li>Exercise No.2 <button onClick={this.exerciseTwo}>Exercise Two</button></li>
            <li>Exercise No.3 <button onClick={this.exerciseThree}>Exercise Three</button></li>
            <li>Exercise No.4 <button onClick={this.exerciseFour}>Exercise Four</button></li>
            <li>Exercise No.5 <button onClick={this.exerciseFive}>Exercise Five</button></li>
            <li>Exercise No.1 <button onClick={this.dirigir}>Exercise One</button></li>

          </ul>

        </header>
      </div>
    );
  } 
}

export default App;
