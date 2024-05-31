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
export class AppComponent {}
