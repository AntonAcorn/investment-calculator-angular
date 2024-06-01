import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculationsComponent } from './calculations/calculations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports:[HeaderComponent, CalculatorComponent, CalculationsComponent]
})
export class AppComponent {
	calculateInvestmentResults(
		initialInvestment: number, 
		annualInvestment: number,
		expectedReturn: number,
		duration: number) {
			
		const annualData = [];
		let investmentValue = initialInvestment;
	
		for (let i = 0;  i < duration; i++) {
			const year = i + 1;
			const interestEarnedInYear = investmentValue * (expectedReturn / 100);
			investmentValue += interestEarnedInYear + annualInvestment;
			const totalInterest =
				investmentValue - annualInvestment * year - initialInvestment;
			annualData.push({
				year: year,
				interest: interestEarnedInYear,
				valueEndOfYear: investmentValue,
				annualInvestment: annualInvestment,
				totalInterest: totalInterest,
				totalAmountInvested: initialInvestment + annualInvestment * year,
			});
		}
	
		return annualData;
	}
}
