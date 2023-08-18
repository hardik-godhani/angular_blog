import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ChatComponent } from './chat/chat.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  { path: 'blogs', component: BlogListComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'country', component: CountryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
