import { Component, Input, input } from '@angular/core';
import { Checkbox } from '../checkbox/checkbox';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [Checkbox],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  @Input() text: string = 'Page';

  onVariantChange(variant: string) {
    console.log('Variant changed to:', variant);
  }
}