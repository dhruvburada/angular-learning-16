import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() inputchange = new EventEmitter<string>();
  @Input() name = "";
  handleInput(event: Event) {
    this.inputchange.emit((event.target as HTMLInputElement).value)
  }
}
