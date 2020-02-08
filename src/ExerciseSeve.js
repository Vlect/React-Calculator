import React from 'react';
import ReacDOM from 'react-dom';
import App from './App.js';


class ExerciseSeve extends React.Component{

	constructor(props){

		super(props);
		this.state={cost : 0};

	}

	totalCost = () => {

		var buyingCost = this.state.cost;
		var offer = 0.2;
		var discount = 0;
		var totalCost = 0;
		if(buyingCost > 5000){

			discount = buyingCost * offer;
			totalCost = buyingCost - discount

			console.log(`The discount in total, was: ${discount}`);
			console.log(`The total cost to pay it'd: ${totalCost}.`);

		}else{

			console.log(`The total cost to pay it'd: ${buyingCost}.`);

		}

	}


	render(){

		return(

			<div className="ExerciseSeve">

				<input 

					type="text"
					value={this.state.cost}
					onChange={e => this.setState({cost : e.target.value})}

				/>

				<button onClick={this.totalCost}>Calculate the total cost</button>
				<button onClick={this.goBack}>go Back</button>

			</div>

		);

	}

}


export default ExerciseSeve;