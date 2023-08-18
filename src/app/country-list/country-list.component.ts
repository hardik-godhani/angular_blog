import { Component } from '@angular/core';
import { DataService } from '../core/service/data.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  countries = [];

  constructor(private dataService: DataService) {
    this.getList()
  }

  getList() {
    this.dataService.getCountries().subscribe((data: any) => {
      this.countries = data;
    })
  }
}
