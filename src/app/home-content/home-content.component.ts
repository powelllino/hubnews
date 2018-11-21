import { Component, OnInit } from '@angular/core';
import { TopHeadersService } from '../top-headers.service';



@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

	headers: Array<any>

  constructor(private topHeaders: TopHeadersService) { }


  ngOnInit() {
  	this.topHeaders.listar().subscribe(
      (data) => {
        this.headers = data.articles;
        console.log(data.articles);
      },
      (error) => {
        console.log(error);
      }

     );
  }
}
