import { Component, EventEmitter, Output, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../investment-input.module';
import { CalculatorServiceComponent } from '../service/calculator.service';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
	styleUrl: './input.component.css',
	imports:[FormsModule]
})
export class InputComponent {

	constructor(private calculatorService: CalculatorServiceComponent){}
	
	enteredInitialInvestement!: number;
	enteredAnnualInvestment!: number;
	enteredExpectedReturn!: number;
	enteredDuration!: number;

	
	onSubmit() {
		this.calculatorService.onCalculateInvestmentResults({
			initialInvestment: this.enteredInitialInvestement,
			annualInvestment: this.enteredAnnualInvestment,
			expectedReturn: this.enteredExpectedReturn,
			duration: this.enteredDuration}
		)
	}
}
