import React from 'react';
import logo from './logo.svg';
import './App.css';

class ExerciseOne extends React.Component{


	constructor(props){

		super(props);
		this.state = {num1 : 0};

	}


	calculatingNumber({this.state.num1}){

		if(this.state.num1 == 0){

			console.log(`This number is: ${this.state.num1}`);

		}else if(number > 0){

			console.log(`This number is: ${this.state.num1}. It is a positive number`);

		}else{

			console.log(`This number is: ${this.state.num1}. It is a negative number`);

		}
	}

	render(){
		 return (
	    	<div className="ExerciseOne">
		
	    		<input 

	    			type="text"
	    			value={this.state.num1}
	    			onChange={e => this.setState({num1 : e.target.value})}

	    		/>

	    	</div>
  		);
	}	 
}

export default ExerciseOne;

