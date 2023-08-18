import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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

  countries$: BehaviorSubject<any> = new BehaviorSubject(null);
  // _countries: Observable<any> = this.countries$.asObservable();

  getCountries(): Observable<any> {
    return this.countries$.asObservable();
  }

  constructor(private http: HttpClient) {
    this.getAllCountries().subscribe((data: any) => {
      this.countries$.next(data);
    })
  }

  getData() {
    return of(this.data);
  }

  getSenderData() {
    return of(this.senderData);
  }

  getAllCountries() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

}
