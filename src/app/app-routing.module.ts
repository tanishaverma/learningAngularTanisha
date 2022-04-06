import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: 'detail/:id', component: EmpDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }