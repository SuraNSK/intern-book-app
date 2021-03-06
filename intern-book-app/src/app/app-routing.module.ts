import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';

const routes : Routes = [
  { path: '', redirectTo: '/pages/list', pathMatch: 'full' },
  { path: 'pages/list', component: ListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }
