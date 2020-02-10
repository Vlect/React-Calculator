import React from 'react';
import './App.css';
import App from './App.js'
import ReactDOM from 'react-dom';
class ExerciseOne extends React.Component{


	constructor(props){

		super(props);
		this.state = {num1 : 0};


	}

	goBack(){

		ReactDOM.render(<App />, document.getElementById('root'));

	}


	calculatingNumber(){

		var number = this.state.num1;

		if(number === 0){

			document.getElementById('pa').innerHTML = "This number is: " + number;

		}else if(number > 0){

			document.getElementById('pa').innerHTML = "This number is: " + number + ". It is a positive number";

		}else{

			document.getElementById('pa').innerHTML = "This number is: " + number + ". It is a negative number";

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
	    		<button

	    			onClick={() => this.calculatingNumber()}

	    		>Calculate the number</button>

	    		<button onClick={this.goBack}>Go back.</button>

	    	</div>
  		);
	}	 
}

export default ExerciseOne;

