import { BehaviorSubject, Observable, Subject, Subscription, first, interval, mergeMap, of, take } from 'rxjs';
import { Component } from '@angular/core';
import { DataService } from '../core/service/data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  data: any;
  senderData: any;

  mergeMapEx = of("hello","savalan",3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
  sub$ = new Subject();
  _obs = this.sub$.asObservable();

  behaviorSub: any = new BehaviorSubject(null);

  constructor(private dataService: DataService) {}

  ngOnInit() {
    //Subject
    const subject = new Subject();
    subject.subscribe (d => console.log(`Subject Subscriber 1: ${d}`));
    subject.next(30);

    subject.subscribe(d => console.log(`Subject Subscriber2: ${d}`));
    subject.next(40);

    //BehaviorSubject
    const bSubject = new BehaviorSubject<number>(15);
    bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber1: ${d}`));
    bSubject.next(6000);
    bSubject.subscribe(d => console.log(`BehaviorSubject Subscriber2: ${d}`));




    // this.behaviorSub.subscribe((data: any) => {
    //   console.log(data);
    // });
    // this.behaviorSub.next("1");
    // this.behaviorSub.next("2");




    // this._obs.subscribe((data) => {
    //   console.log("subs 1 - ", data);
    // })
    // this._obs.subscribe((data) => {
    //   console.log("subs 2 - ", data);
    // })
    // this.sub$.next("Hi this is first data");
    // this.sub$.next("Hi this is second data");
    // this.sub$.next("Hi this is third data");
    // this.sub$.next("Hi this is fourth data");
    // this.sub$.next("Hi this is fifth data");

    // this.mergeMapEx.pipe(
    //   mergeMap((value: any) => this.createObservable(value))
    // ).subscribe((data) => {
    //   console.log(data);
    // })

    // this.mergeMapEx.pipe(
    //   first()
    // ).subscribe(data => {
    //   console.log(data);
    // })

    // let obs = interval(1000);
    // obs.subscribe((value) => {
    //   console.log(value);
    // })

    // this.mergeMapEx.subscribe((value) => {
    //   console.log(value);
    // })

    // this.mergeMapEx.pipe(take(20)).subscribe((value) => {
    //   console.log(value);
    // })

    // setTimeout(() => {
    //   console.log("Executed after a second!");
    // }, 1000);








    this.dataService.getData().subscribe((data: any) => {
      this.data = data;
    })
    this.dataService.getSenderData().subscribe((senderData: any) => {
      this.senderData = senderData;
    })
  }

  createObservable(value: any): Observable<any> {
    return of(`User ${ value } details`);
  }



}
