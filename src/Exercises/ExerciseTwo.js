import React from 'react';
import './App.css';
import App from './App.js';
import ReactDOM from 'react-dom';

class ExerciseTwo extends React.Component{

	constructor(props){

		super(props);
		this.state={num1 : 0};

	}

	evenOrOdd = () => {

		var number = this.state.num1;

		if(number % 2 == 0){


			console.log(`${number} is a even number.`);

		}else{
			console.log(`${number} is a odd number`);
		}

	}

	render(){

		return(

			<div className="ExerciseTwo">

				<input

					type="text"
					value={this.state.num1}
					onChange={e => {this.setState({num1 : e.target.value})}}

				 />

			</div>


		);

	}

}
export default ExerciseTwo;