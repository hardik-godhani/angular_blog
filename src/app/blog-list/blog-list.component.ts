import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
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

  onBlogLiked(blog: any) {
    let tempBlog = [...this.blogs];
    this.blogs = [];
    tempBlog.forEach(el => {
      if (el.id === blog.id) {
        el.likeCount = el.likeCount + 1;
      }
    })
    setTimeout(() => {
      this.blogs = tempBlog;
    }, 1000);
  }

}
