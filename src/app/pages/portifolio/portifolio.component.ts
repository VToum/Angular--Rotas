import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit{

  constructor(private puxaAqui: ActivatedRoute){

    //recupera isso aqui: http://localhost:4200/portifolio/1
    this.puxaAqui.params.subscribe(
      res => console.log(res)
    )

    //recupera isso aqui: http://localhost:4200/portifolio/1?{name=everton&token=123}
    this.puxaAqui.queryParams.subscribe(
      res => console.log(res)
    )

  }

  ngOnInit(): void {
      
  }

}
