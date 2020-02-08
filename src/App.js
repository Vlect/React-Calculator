import React from 'react';
import './App.css';
import ExerciseOne from './ExerciseOne.js';
import ExerciseTwo from './ExerciseTwo.js';
import ExerciseThree from './ExerciseThree';
import ExerciseFour from './ExerciseFour';
import ExerciseFive from './ExerciseFive';
import ExerciseSix from './ExerciseSix';
import ExerciseSeve from './ExerciseSeve';
import ExerciseEight from './ExerciseEight';
import ExericiseNine from './ExericiseNine';
import ExerciseTen from './ExerciseTen';
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

  exerciseSix(){

    ReactDOM.render(<ExerciseSix />, document.getElementById('root'));

  }

  exerciseSeve(){

    ReactDOM.render(<ExerciseSeve />, document.getElementById('root'));

  }
  exerciseEight(){

    ReactDOM.render(<ExerciseEight />, document.getElementById('root'));

  }
  exerciseNine(){

    ReactDOM.render(<ExericiseNine />, document.getElementById('root'));

  }
  exerciseTen(){

    ReactDOM.render(<ExerciseTen />, document.getElementById('root'));

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
            <li>Exercise No.6 <button onClick={this.exerciseSix}>Exercise Six</button></li>
            <li>Exercise No.7 <button onClick={this.exerciseSeve}>Exercise Seven</button></li>
            <li>Exercise No.8 <button onClick={this.exerciseEight}>Exercise Eight</button></li>
            <li>Exercise No.9 <button onClick={this.exerciseNine}>Exercise Nine</button></li>
            <li>Exercise No.10 <button onClick={this.exerciseTen}>Exercise Ten</button></li>

          </ul>

        </header>
      </div>
    );
  } 
}

export default App;
