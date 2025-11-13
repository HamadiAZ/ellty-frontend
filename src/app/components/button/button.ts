import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  backgroundColor: string = '#FFCE22';
  opacity: number = 1;
  
  isHovering = false;
  isPressed = false;

  get currentBackgroundColor(): string {
    if (this.isPressed) {
      return this.backgroundColor;
    }
    if (this.isHovering) {
      return '#FFD84D';
    }
    return this.backgroundColor;
  }

  onMouseEnter(): void {
    this.isHovering = true;
  }

  onMouseLeave(): void {
    this.isHovering = false;
  }

  onMouseDown(): void {
    this.isPressed = true;
  }

  onMouseUp(): void {
    this.isPressed = false;
  }
}