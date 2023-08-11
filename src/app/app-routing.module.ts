import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';

const routes: Routes = [
  { path: 'blogs', component: BlogListComponent},
  { path: 'viewchild', component: ViewChildComponent},
  { path: 'hook', component: LifecycleHookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
