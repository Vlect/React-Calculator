import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

class ExerciseFive extends React.Component{


	constructor(props){

		super(props);
		this.state = {num1 : 0, num2 : 0, num3 : 0, biggest : 0};
		this.theBigger = this.theBigger.bind(this);

	}

	goBack(){

		ReactDOM.render(<App />, document.getElementById('root'));

	}

	theBigger(){

		console.log(this.state);
 		var biggest = 0;
		var numbers = [this.state.num1,this.state.num2,this.state.num3];

		console.log(numbers);

 		for(var i=0;i<numbers.length;i++){
			if(numbers[i] > biggest){
				biggest = parseInt(numbers[i]);
			}

		}

		this.setState({biggest : biggest});

		console.log(biggest);
	}

	render(){

		return(

				<div className="ExerciseFive">

					<input

						type="text"
						value={this.state.num1}
						onChange={e => this.setState({num1 : e.target.value})}

					/>
					<input

						type="text"
						value={this.state.num2}
						onChange={e => this.setState({num2 : e.target.value})}

					/>
					<input

						type="text"
						value={this.state.num3}
						onChange={e => this.setState({num3 : e.target.value})}

					/>

					<button onClick={this.theBigger}>Calculate</button>
					<button onClick={this.goBack}>Go back</button>

					<p>The biggest number is: {this.state.biggest}</p>

				</div>

			);

	}

}

export default ExerciseFive;