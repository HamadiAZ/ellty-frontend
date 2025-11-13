import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() backgroundColor: string = '#FFCE22';
  @Input() opacity: number = 1;
}