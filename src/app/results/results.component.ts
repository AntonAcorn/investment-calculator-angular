import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalculatorServiceComponent } from '../service/calculator.service';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
	styleUrl: './results.component.css',
	imports: [CurrencyPipe]
})
export class ResultsComponent {
	constructor(private calculatorService: CalculatorServiceComponent) {
	}

	get results() {
		return this.calculatorService.resultsData;
	}

}
