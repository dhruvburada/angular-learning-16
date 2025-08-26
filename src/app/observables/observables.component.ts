import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { count } from 'rxjs-compat/operator/count';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
  count = 0;
  ngOnInit() {
    let obs = new Observable<number>(observer => {
      const interval = setInterval(() => {
        observer.next(this.count);
        this.count++;
        if (this.count > 8) {
          clearInterval(interval)
          observer.complete()
        }

      }, 1000)
    })
    const subject$ = new Subject<number>();


    subject$.next(Math.random());
    subject$.subscribe(val => console.log('Subscriber A:', val));
    subject$.subscribe(val => console.log('Subscriber B:', val));



    obs.pipe(
      map((next: number) => next * 2)
    ).subscribe((next) => console.log(next), () => { }, (): void => { console.log("done") })
  }



}
