import { Component, ElementRef, ViewChild } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { Observable, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  @ViewChild('app_blog') header: BlogComponent = new BlogComponent();

  numberObservable = of(1,2,3,4,5,6,7,8,9);
  // numberObservable = of(1, 2);
  // numberObservable = new Observable((observer) => {
  //   observer.next(1);
  //   observer.next(2);
  //   observer.next(3);
  //   observer.next(4);
  //   observer.next(5);
  //   observer.next(6);
  //   observer.next(7);
  //   observer.next(8);
  //   observer.next(9);
  //   observer.complete();
  // });

  constructor() {
    // MAP
    this.numberObservable.pipe(
      map((value) => value * value * value)
    ).subscribe((value) => {
      console.log('observable values : ', value);
    })

    // Filter
    this.numberObservable.pipe(
      filter((value) => value % 2 === 1)
    ).subscribe((value) => {
      console.log('odd values : ', value);
    })
  }

  // take
  // takeuntil
  // mergeMap
  // SwitchMap

  showBlog = true;
  isLoggedIn = false;

  players: any[] = [
    {
      name: "player1",
      type: "bowler",
      states: {
        wickets: 100,
        runRate: 10.5
      }
    },
    {
      name: "player2",
      type: "batter",
      states: {
        runs: 1000,
        fifty: 14
      }
    },
    {
      name: "player3",
      type: "wicketKeeper",
      states: {
        stumps: 54
      }
    },
    {
      name: "player4",
      type: null,
      states: null
    },
    {
      name: "player5",
      type: "wicketKeeper",
      states: {
        stumps: 150
      }
    },
  ];

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

}
