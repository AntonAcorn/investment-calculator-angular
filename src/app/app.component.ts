import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ResultsComponent } from './results/results.component';
import { InvestmentData } from './investment-input.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, InputComponent, ResultsComponent],
})
export class AppComponent {}
