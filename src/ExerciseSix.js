import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


class ExerciseSix extends React.Component{

	constructor(props){

		super(props);	
		this.state = {greatOne : 0.0, greatTwo : 0.0, greatThree : 0.0, average : 0.0};
		this.greatsAverage = this.greatsAverage.bind(this);

	}

	goBack(){

		ReactDOM.render(<App />, document.getElementById('root'));

	}


	greatsAverage(){

		var getGreats = [this.state.greatOne,this.state.greatTwo,this.state.greatThree];
		var result = 0.0;
		var average = 0;

		for(var i=0;i<3;i++){

			result += parseFloat(getGreats[i]);
		}	

		average =  getGreats.length;

		result /= average;

		this.setState({average : result});


		if(result >= 3.5){

			console.log('You passed the subject with: ' + result);

		}else{

			console.log('You dimissed the subject with: ' + result);

		}

		console.log(result);
		console.log(getGreats);
		console.log(average);

	}

	render(){

		return(

			<div className="ExerciseSix">


				<label></label>
				<input

					type="text"
					value={this.state.greatOne}
					onChange={e => this.setState({greatOne : e.target.value})}

				/>


				<input

					type="text"
					value={this.state.greatTwo}
					onChange={e => this.setState({greatTwo : e.target.value})}

				/>


				<input

					type="text"
					value={this.state.greatThree}
					onChange={e => this.setState({greatThree : e.target.value})}

				/>

				<button onClick={this.greatsAverage}>Calculate greats average</button>
				<button onClick={this.goBack}>Go back</button>
				<br/>
				<label>Average</label>
				<br/>
				{this.state.average};
				<br/>

			</div>
		);

	}

}


export default ExerciseSix;