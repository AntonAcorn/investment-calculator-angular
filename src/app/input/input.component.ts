import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../investment-input.module';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
	styleUrl: './input.component.css',
	imports:[FormsModule]
})
export class InputComponent {

	@Output() enteredInvestmentDataEmitter = new EventEmitter<InvestmentData>();

	enteredInitialInvestement!: number;
	enteredAnnualInvestment!: number;
	enteredExpectedReturn!: number;
	enteredDuration!: number;

	
	onSubmit() {
		this.enteredInvestmentDataEmitter.emit({
			initialInvestment: +this.enteredInitialInvestement,
			annualInvestment: +this.enteredAnnualInvestment,
			expectedReturn: +this.enteredExpectedReturn,
			duration: +this.enteredDuration
		});
	}
}
