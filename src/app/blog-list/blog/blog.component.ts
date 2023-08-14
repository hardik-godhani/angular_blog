import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  // @ContentChild('paragraph') paragraph: ElementRef = new ElementRef(null);
  @Input() blogInput!: any;
  // blogInput = {
  //   title: 'First Blog',
  //   likeCount: '0',
  //   content: 'ausydvbb asdb vasoid asidv fasid asidv ',
  // };
  @Input() name = '';

  ngOnChanges(changes: any) {
  }

  ngOnInit() {
    // if(this.paragraph) {
    //   this.paragraph.nativeElement.innerText = "This is coming from ContentChild from onInit"
    // }
  }

  ngAfterContentInit() {
    // if(this.paragraph) {
    //   this.paragraph.nativeElement.innerText = "This is coming from ContentChild afterContentInit"
    // }
  }

  onLike() {

  }

}
