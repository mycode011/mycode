import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

const routes: Routes = [
  { path: '', redirectTo: '/page-1', pathMatch: 'full' },
  { path: 'page-1', component: Page1Component },
  { path: 'page-2', component: Page2Component },
  { path: 'page-3', component: Page3Component },
  { path: 'page-4', component: Page4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
