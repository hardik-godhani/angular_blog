import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  @Input() blogInput: any;
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  randomNumber = Math.random();

  onLike() {
    this.emitter.emit(this.blogInput);
  }

}
