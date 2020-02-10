import React from 'react';
import ReacDOM from 'react-dom';
import App from './App.js';


class ExerciseSeve extends React.Component{

	constructor(props){

		super(props);
		this.state={cost : 0, discount : 0, totalCost : 0};

	}

	totalCost = () => {

		var buyingCost = this.state.cost;
		var offer = 0.2;
		var discount = 0;
		var totalCost = 0;
		if(buyingCost > 5000){

			discount = buyingCost * offer;
			totalCost = buyingCost - discount

			this.setState({discount : discount});
			this.setState({totalCost : totalCost});


		}else{

			this.setState({totalCost : buyingCost});

		}

	}

	goBack(){

		ReacDOM.render(<App />, document.getElementById('root'));

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

				<p>Your discount is: {this.state.discount}</p>
				<p>Your discount is: {this.state.totalCost}</p>

			</div>

		);

	}

}


export default ExerciseSeve;