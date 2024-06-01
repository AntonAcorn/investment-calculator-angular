import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
	styleUrl: './calculator.component.css',
	imports:[FormsModule]
})
export class CalculatorComponent {

	enteredInitialInvestement!: number;
	enteredAnnualInvestment!: number;
	
	onSubmit() {
		console.log(
			"Submitted: "  + 
			this.enteredInitialInvestement,
			this.enteredAnnualInvestment
		);
	}
}
