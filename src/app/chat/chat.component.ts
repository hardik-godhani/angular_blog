import { Observable, Subscription, mergeMap, of } from 'rxjs';
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

  mergeMapEx = of(1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.mergeMapEx.pipe(
      mergeMap((value: any) => this.createObservable(value))
    ).subscribe((data) => {
      console.log(data);
    })








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
