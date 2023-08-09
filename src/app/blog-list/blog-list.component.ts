import { Component, ElementRef, ViewChild } from '@angular/core';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  @ViewChild('app_blog') header: BlogComponent = new BlogComponent();

  showBlog = true;
  isLoggedIn = false;

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

  // onBlogLiked(blog: any) {
  //   this.blogs.forEach(el => {
  //     if (el.id === blog.id) {
  //       el.likeCount = el.likeCount + 1;
  //     }
  //   })
  //   if(this.header) {
  //     this.header.nativeElement.innerText = blog.title;
  //   }
  // }

  OnClickChange() {
    if(this.header) {
      this.header.blogInput.likeCount = "1000";
    }
  }

  removeButton() {
    debugger;
  }

}
