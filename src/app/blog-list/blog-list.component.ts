import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList } from '@angular/core';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  @ViewChild('app_blog') header: BlogComponent = new BlogComponent();
  name = '';

  showBlog = true;
  isLoggedIn = false;

  @ContentChildren(BlogComponent) children!: QueryList<BlogComponent>;

  constructor() {

  }

  ngAfterContentInit() {
    if(this.children) {
      return
    }
  }

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
