import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';

const routes: Routes = [
  {
    path: '', component: TitleComponent, pathMatch: 'full'
  },
  {
    path: 'portifolio/:id', component: PortifolioComponent, pathMatch: 'prefix'
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
