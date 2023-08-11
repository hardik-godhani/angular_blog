import { Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {
  title = 'angular-view-children';
  fullName: string="";
  @ViewChildren('inputEl') inputElements: QueryList<ElementRef>;

  show () {
    let name = "";
    this.inputElements.forEach((el) => {
      name += el.nativeElement.value + ' ';
    })
    this.fullName = name.trim()

  }

}
