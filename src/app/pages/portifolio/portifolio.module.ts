import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PortifolioComponent } from './portifolio.component';



@NgModule({
  declarations: [
    PortifolioComponent
  ],
  exports: [
    PortifolioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortifolioModule { }
