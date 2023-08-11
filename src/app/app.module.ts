import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog-list/blog/blog.component';
import { FormsModule } from '@angular/forms';
import { ViewChildComponent } from './view-child/view-child.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { DemoComponent } from './lifecycle-hook/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogComponent,
    ViewChildComponent,
    LifecycleHookComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
