import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../investment-input.module';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
	styleUrl: './calculator.component.css',
	imports:[FormsModule]
})
export class CalculatorComponent {

	enteredInvestmentData = output<InvestmentData | undefined>();
	data: InvestmentData
	
	onSubmit() {
		this.enteredInvestmentData.emit(this.enteredInvestmentData);
		console.log("Submitted: " + this.enteredInvestmentData);
	}
}
