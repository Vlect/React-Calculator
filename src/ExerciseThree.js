import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import App from './App.js';

class ExerciseThree extends React.Component{


	constructor(props){

		super(props);
		this.state = {num1 : 0};
		this.numerLength = this.numerLength.bind(this);

	}

	goBack(){

		ReactDOM.render(<App />, document.getElementById('root'));

	}

	numerLength(){

		var number = this.state.num1;

		if(number > 99 && number <= 999){

			document.getElementById('pa').innerHTML ='The number has three figures';

		}else if(number > 9 && number <= 99){

			document.getElementById('pa').innerHTML ='The number has two figures';

		}else if(number <= 9){

			document.getElementById('pa').innerHTML ='The number only has one figure';

		}else{

			document.getElementById('pa').innerHTML ='You introduced a number of more figures';
		}

	}


	render(){

		return(

				<div className="ExerciseThree">

					<input 

						type="text"
						value={this.state.num1}
						onChange={e => this.setState({num1 : e.target.value})}

					/>
				<button onClick={this.numerLength}>Calculate</button>	
				<button onClick={this.goBack}>Go back</button>
				</div>			

			);

	}

}

export default ExerciseThree;