import React from 'react';
import ReacDOM from 'react-dom';
import App from './App.js';


class ExericiseNine extends React.Component{

	constructor(props){

		super(props);
		this.state={count : 0, total : 0};

	}

	totalCost = () => {

		var buyingCount = this.state.count;
		var tShirtsCost = 5000;
		var offer = 0.0;
		var discount = 0;
		var totalCost = 0;

		if(buyingCount <= 3){

			offer = 0.1;
			tShirtsCost *= buyingCount;
			discount =  tShirtsCost * offer;
			totalCost =  tShirtsCost - discount
			this.setState({total : totalCost});

		}else if (buyingCount > 3 && buyingCount < 5){


			offer = 0.2;
			tShirtsCost *= buyingCount;
			discount =  tShirtsCost * offer;
			totalCost =  tShirtsCost - discount
			this.setState({total : totalCost});

		}else{


			offer = 0.4;
			tShirtsCost *= buyingCount;
			discount =  tShirtsCost * offer;
			totalCost =  tShirtsCost - discount
			this.setState({total : totalCost});
		}

	}
	goBack(){

		ReacDOM.render(<App />, document.getElementById('root'));

	}

	render(){

		return(

			<div className="ExerciseNine">

				<input 

					type="text"
					value={this.state.count}
					onChange={e => this.setState({count : e.target.value})}

				/>

				<button onClick={this.totalCost}>Calculate the total cost</button>
				<button onClick={this.goBack}>go Back</button>

				<p>The discount in total, was: {this.state.total}</p>
				<p>The total cost to pay would be: {this.state.total}</p>
			</div>

		);

	}

}


export default ExericiseNine;