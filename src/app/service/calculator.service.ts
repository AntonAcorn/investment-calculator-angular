import { Injectable } from "@angular/core";
import { InvestmentData } from "../investment-input.module";

@Injectable({ providedIn: 'root' })
export class ServiceComponent {
	resultsData?: {
		year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
	}[];

  onCalculateInvestmentResults(data: InvestmentData) {
    const annualData = [];
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
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
    this.resultsData = annualData;
  }
}