import React from 'react';
import ReacDOM from 'react-dom';
import App from './App.js';


class ExericiseTen extends React.Component{

	constructor(props){

		super(props);
		this.state={years : 0};

	}

	totalSalary = () => {

		var yearsWorked = this.state.years;
		var salary = 500000;
		var totalSalary = 0;
		var utility = 0.0;

		if(yearsWorked < 1){

			utility = 0.05;
			totalSalary = salary * utility;
			console.log(`Your total mount is: ${totalSalary}`);


		}else if (yearsWorked >= 1 && yearsWorked < 2){


			utility = 0.07;
			totalSalary = salary * utility;
			console.log(`Your total mount is: ${totalSalary}`);

		}else if(yearsWorked >= 2 && yearsWorked < 5){


			utility = 0.1;
			totalSalary = salary * utility;
			console.log(`Your total mount is: ${totalSalary}`);

		}else if(yearsWorked >= 5 && yearsWorked < 10){


			utility = 0.15;
			totalSalary = salary * utility;
			console.log(`Your total mount is: ${totalSalary}`);

		}else if(yearsWorked >= 10){


			utility = 0.2;
			totalSalary = salary * utility;
			console.log(`Your total mount is: ${totalSalary}`);

		}

	}


	render(){

		return(

			<div className="ExerciseTen">

				<input 

					type="text"
					value={this.state.years}
					onChange={e => this.setState({years : e.target.value})}

				/>

				<button onClick={this.totalSalary}>Calculate the salary</button>
				<button onClick={this.goBack}>go Back</button>

			</div>

		);

	}

}


export default ExericiseTen;