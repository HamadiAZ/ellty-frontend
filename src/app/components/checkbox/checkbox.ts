import { Component, Output, EventEmitter, HostListener } from '@angular/core';

interface CheckboxVariant {
  name: string;
  checked: boolean;
  opacity: number;
  backgroundColor: string;
  tickColor: string;
}

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
})
export class Checkbox {
  @Output() variantChange = new EventEmitter<string>();

  variants: CheckboxVariant[] = [
    { name: 'variant1', checked: false, opacity: 1, backgroundColor: 'white', tickColor: '#ffffff' },
    { name: 'variant2', checked: true, opacity: 0.5, backgroundColor: 'white', tickColor: '#E3E3E3' },
    { name: 'variant3', checked: true, opacity: 1, backgroundColor: 'transparent', tickColor: '#878787' },
    { name: 'variant4', checked: true, opacity: 0.6, backgroundColor: '#007bff', tickColor: '#ffffff' },
    { name: 'variant5', checked: true, opacity: 1, backgroundColor: '#007bff', tickColor: '#ffffff' },
    { name: 'variant6', checked: true, opacity: 0.6, backgroundColor: '#007bff', tickColor: '#ffffff' },
    { name: 'variant7', checked: true, opacity: 1, backgroundColor: '#007bff', tickColor: '#ffffff' },
    { name: 'variant8', checked: true, opacity: 0.5, backgroundColor: 'transparent', tickColor: '#E3E3E3' },
  ];

  currentIndex = 0;

  get currentVariant(): CheckboxVariant {
    return this.variants[this.currentIndex];
  }

  onClick(event: MouseEvent): void {
    event.preventDefault();
    this.currentIndex = (this.currentIndex + 1) % this.variants.length;
    this.variantChange.emit(this.currentVariant.name);
  }

  get backgroundImage(): string {
    if (!this.currentVariant.checked) return 'none';
    const svg = `<svg width="19" height="12" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.500008 6.572L6.0488 11.5072C6.06926 11.5254 6.10056 11.5237 6.11899 11.5035L16.14 0.500004" stroke="${this.currentVariant.tickColor}" stroke-linecap="round"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }

  get opacity(): number {
    return this.currentVariant.opacity;
  }

  get backgroundColor(): string {
    return this.currentVariant.backgroundColor;
  }

  get isChecked(): boolean {
    return this.currentVariant.checked;
  }
}