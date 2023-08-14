import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_blog';
  showContent = true;
  blogs: any[] = [
    {
      id: 1,
      title: 'First Blog',
      content: 'This is the content of the first blog.',
      likeCount: 0
    },
    {
      id: 2,
      title: 'Second Blog',
      content: 'This is the content of the second blog.',
      likeCount: 0
    },
    {
      id: 3,
      title: 'Third Blog',
      content: 'This is the content of the third blog.',
      likeCount: 0
    },
  ];
  name = '';

  removeButton() {

  }
}
