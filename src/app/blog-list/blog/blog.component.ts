import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  // @Input() blogInput!: any;
  blogInput = {
    title: 'First Blog',
    likeCount: '0',
    content: 'ausydvbb asdb vasoid asidv fasid asidv ',
  };

  onLike() {

  }

}
