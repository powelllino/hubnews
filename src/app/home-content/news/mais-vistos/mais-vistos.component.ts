import { Component, OnInit } from '@angular/core';
import { MaisLidasService } from '../../../mais-lidas.service';

@Component({
  selector: 'app-mais-vistos',
  templateUrl: './mais-vistos.component.html',
  styleUrls: ['./mais-vistos.component.scss']
})
export class MaisVistosComponent implements OnInit {

	maislidas: Array<any>

  constructor(private maisLidas: MaisLidasService) { }

  ngOnInit() {

  	this.maisLidas.listar().subscribe(
      (data) => {
        this.maislidas = data.articles;

      },
      (error) => {
        console.log(error);
      }

     );
  }

}
