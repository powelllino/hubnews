import { Component, OnInit } from '@angular/core';
import { TopultimasService } from '../../../topultimas.service';

@Component({
  selector: 'app-ultimas',
  templateUrl: './ultimas.component.html',
  styleUrls: ['./ultimas.component.scss']
})
export class UltimasComponent implements OnInit {

	ultimas: Array<any>

  constructor(private topUltimas: TopultimasService) { }

  ngOnInit() {

  	this.topUltimas.listar().subscribe(
      (data) => {
        this.ultimas = data.articles;
      },
      (error) => {
        console.log(error);
      }

     );
  }

}
