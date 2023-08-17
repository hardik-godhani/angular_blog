import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = {
    name: "jhon doe",
    senderId: "12345",
    message: "Lorem ipsum"
  }

  senderData = {
    name: "Sender jhon doe",
    senderId: "54321",
    message: "Lorem ipsum"
  }

  constructor() { }

  getData() {
    return of(this.data);
  }

  getSenderData() {
    return of(this.senderData);
  }

}
