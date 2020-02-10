import React from 'react';
import ReacDOM from 'react-dom';
import App from './App.js';


class ExerciseEight extends React.Component{

	constructor(props){

		super(props);
		this.state={hours : 0, total : 0};

	}

	totalToPay = () => {

		var hours = this.state.hours;
		var totalToEarn = 0;
		var extraHours = 0;

		if(hours <= 40){

			totalToEarn = hours * 2000;
			this.setState({total : totalToEarn})

		}else{

			extraHours = hours - 40;

			totalToEarn = ((hours - extraHours) * 2000) + (extraHours * 3000);
			this.setState({total : totalToEarn})

		}		

	}

	goBack(){

		ReacDOM.render(<App />, document.getElementById('root'));

	}

	render(){

		return(

			<div className="ExerciseEight">

				<label>Hours</label>
				<hr/>
				<input 

					type="text"
					value={this.state.hours}
					onChange={e => this.setState({hours : e.target.value})}

				/>
				<hr/>
				<label>Extra hours</label>
				<hr/>

				<button onClick={this.totalToPay}>Calculate the total you will earn</button>
				<button onClick={this.goBack}>go Back</button>

				<p>The total you will earn is: {this.state.total}</p>

			</div>

		);

	}

}


export default ExerciseEight;