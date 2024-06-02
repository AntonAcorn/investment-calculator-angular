import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
	styleUrl: './results.component.css',
	imports: [CurrencyPipe]
})
export class ResultsComponent {
	@Input({required: true}) resultData?: {
		year: number,
		interest: number,
		valueEndOfYear: number,
		annualInvestment: number,
		totalInterest: number,
		totalAmountInvested: number
	}[];
}
