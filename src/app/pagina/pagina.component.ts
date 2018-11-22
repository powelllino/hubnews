import { Component, OnInit } from '@angular/core';
import {
	Router,
	ActivatedRoute
} from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  listaPosts: Array<any>

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private CategoriaService: CategoriaService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.CategoriaService.fetchPageBySlug(params['slug']).subscribe(
          (data) => {
              this.listaPosts = data.articles;
              console.log(data);
            },
            (error) => {
              console.log(error);
            }
         );
      }
     );
  }

}
