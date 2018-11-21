import { Component, OnInit } from '@angular/core';
import { TopHeadersService } from '../../../top-headers.service';

@Component({
  selector: 'app-top-headers',
  templateUrl: './top-headers.component.html',
  styleUrls: ['./top-headers.component.scss']
})
export class TopHeadersComponent implements OnInit {

	headers: Array<any>

  constructor(private topHeaders: TopHeadersService) { }

  ngOnInit() {
  	this.topHeaders.listar().subscribe(
      (data) => {
        this.headers = data.articles;
      },
      (error) => {
        console.log(error);
      }

     );
  }

}
