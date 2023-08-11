import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnChanges {
  title: string = "demo component";
  @Input() message: string;
constructor () {
  console.log('demo called');
  console.log(this.title);
  console.log(this.message);
}

ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges Hook called');
  console.log(changes);
}
}
