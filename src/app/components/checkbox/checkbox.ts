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
  isHovering = false;
  hoverVariantIndex: number | null = null;

  get currentVariant(): CheckboxVariant {
    return this.variants[this.currentIndex];
  }

  get displayVariant(): CheckboxVariant {
    if (this.hoverVariantIndex !== null) {
      return this.variants[this.hoverVariantIndex];
    }
    return this.currentVariant;
  }

  onMouseEnter(): void {
    const currentName = this.currentVariant.name;
    if (currentName === 'variant1') {
      this.hoverVariantIndex = 1; // variant2
    } else if (currentName === 'variant7') {
      this.hoverVariantIndex = 7; // variant8
    } else if (currentName === 'variant5') {
      this.hoverVariantIndex = 5; // variant6
    }
  }

  onMouseLeave(): void {
    this.hoverVariantIndex = null;

    const currentName = this.currentVariant.name;
    if (currentName === 'variant4') {
      this.hoverVariantIndex = 4; // variant5
    } else if (currentName === 'variant8') {
      this.hoverVariantIndex = 8; // variant9
    }
  }

  onClick(event: MouseEvent): void {
    event.preventDefault();
    this.currentIndex = (this.currentIndex + 1) % this.variants.length;
    this.variantChange.emit(this.currentVariant.name);
  }

  get backgroundImage(): string {
    if (!this.displayVariant.checked) return 'none';
    const svg = `<svg width="19" height="12" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.500008 6.572L6.0488 11.5072C6.06926 11.5254 6.10056 11.5237 6.11899 11.5035L16.14 0.500004" stroke="${this.displayVariant.tickColor}" stroke-linecap="round"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }

  get opacity(): number {
    return this.displayVariant.opacity;
  }

  get backgroundColor(): string {
    return this.displayVariant.backgroundColor;
  }

  get isChecked(): boolean {
    return this.displayVariant.checked;
  }
}