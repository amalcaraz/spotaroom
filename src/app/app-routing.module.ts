import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: ':city', loadChildren: 'app/city/city.module#CityModule'},
  {path: '', redirectTo: 'madrid', pathMatch: 'full'},
  // {path: '', loadChildren: 'app/home/home.module#HomeModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
