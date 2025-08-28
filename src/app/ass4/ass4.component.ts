import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ass4',
  templateUrl: './ass4.component.html',
  styleUrls: ['./ass4.component.css']
})
export class Ass4Component {

  count: number = 0;
  interval!: ReturnType<typeof setInterval>;;
  @Output() numberChange = new EventEmitter<number>();
  onStart() {
    this.interval = setInterval(() => {
      this.numberChange.emit(this.count);
      this.count++;
    }, 1000)
  }

  OnEnd() {
    clearInterval(this.interval)
  }
}

