import { Component, signal } from '@angular/core';
import { Button } from './components/button/button';
import { Todo } from './components/todo/todo';

@Component({
  selector: 'app-root',
  imports: [Button, Todo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ellty-angular-app');
}
