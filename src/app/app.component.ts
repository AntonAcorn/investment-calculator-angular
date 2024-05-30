import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports:[HeaderComponent, CalculatorComponent]
})
export class AppComponent {}
