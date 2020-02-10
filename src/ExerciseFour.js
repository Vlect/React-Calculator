import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

class ExerciseFour extends React.Component{

	constructor(props){

		super(props);
		this.state={num1 : 0, num2 : 0};

	}

	goBack(){

		ReactDOM.render(<App />, document.getElementById('root'));

	}

	compareNumber = () => {

		var number = this.state.num1;
		var number2 = this.state.num2;

		if(number == number2){

			document.getElementById('pa').innerHTML = number + " and " + number2 + " are equals ";

		}else{

			document.getElementById('pa').innerHTML = number + " and " + number2 + " are unequals ";
		}

	}

	render(){

		return(

				<div className="ExerciseFour">

					<input 

						type="number"
						value={this.state.num1}
						onChange={e => this.setState({num1 : e.target.value})}

					/>


					<input 

						type="number"
						value={this.state.num2}
						onChange={e => this.setState({num2 : e.target.value})}

					/>

					<button onClick={this.compareNumber}>Calculate</button>

					<button onClick={this.goBack}>Go back</button>

				</div>
				
			);

	}

}

export default ExerciseFour;