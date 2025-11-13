import { Component, signal } from '@angular/core';
import { Checkbox } from './components/checkbox/checkbox';

@Component({
  selector: 'app-root',
  imports: [Checkbox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ellty-angular-app');
}
