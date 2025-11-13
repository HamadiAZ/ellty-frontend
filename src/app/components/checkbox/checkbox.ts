import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
})
export class Checkbox {
  @Input() checked: boolean = false;
  @Input() checkedBgColor: string = '#007bff';
  @Input() tickColor: string = '#ffffff';
  @Input() opacity: number = 1;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
  }

  get backgroundImage() {
    if (!this.checked) return 'none';
    const svg = `<svg width="19" height="12" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.500008 6.572L6.0488 11.5072C6.06926 11.5254 6.10056 11.5237 6.11899 11.5035L16.14 0.500004" stroke="${this.tickColor}" stroke-linecap="round"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }
}