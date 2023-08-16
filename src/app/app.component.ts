import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_blog';
  showContent = true;
  subs = new Subscription();

  observable = new Observable((observer) => {
    observer.next('Hello');
    observer.next('Savalan');
    setTimeout(() => {
      observer.next('time out of 1.5 sec');
    }, 1500);
    observer.complete();
  });

  constructor() {

    this.subs.add(
      this.observable.subscribe((value) => {
        console.log('log from constructor : ', value);
      })
    )

    this.observable.subscribe((value) => {
      console.log('from subs 2 log from constructor : ', value);
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
