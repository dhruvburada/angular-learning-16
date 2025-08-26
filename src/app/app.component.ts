import { Component, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  count = 0;
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    // const button = this.el.nativeElement.querySelector('button');
    // button.addEventListener('click', () => {
    //   this.count++;
    //   console.log('Native Clicks:', this.count);
    //   // ❌ UI will NOT update
    // })

  }
}



