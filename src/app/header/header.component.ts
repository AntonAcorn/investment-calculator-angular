import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	imports: [FormsModule]
})
export class HeaderComponent {}
