import React from 'react';
import './App.css';
import App from './App.js';
import ReactDOM from 'react-dom';

class ExerciseTwo extends React.Component{

	constructor(props){

		super(props);
		this.state={num1 : 0};
		this.evenOrOdd = this.evenOrOdd.bind(this);

	}

	evenOrOdd = () => {

		var number = this.state.num1;

		if(number % 2 == 0){
			
			console.log(`${number} is a even number.`);

		}else{
			console.log(`${number} is a odd number`);
		}

	}

	goBack(){

		ReactDOM.render(<App />, document.getElementById('root'));

	}

	render(){

		return(

			<div className="ExerciseTwo">

				<input

					type="text"
					value={this.state.num1}
					onChange={e => {this.setState({num1 : e.target.value})}}

				 />

				<button onClick={this.evenOrOdd}>Calculate</button>				 

				<button onClick={this.goBack}>Go back</button>

			</div>


		);

	}

}
export default ExerciseTwo;