import { Component, signal } from '@angular/core';
import { Checkbox } from './components/checkbox/checkbox';
import { Button } from './components/button/button';

@Component({
  selector: 'app-root',
  imports: [Checkbox, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ellty-angular-app');
}
