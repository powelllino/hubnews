import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

	categoryURL = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) { }

  fetchPageBySlug = (slug: string): Observable<any> => {
		return this.http.get(`${this.categoryURL}/top-headlines?country=br&category=${slug}&apiKey=49b8d566b15a4834b9723e58a07aa389`);
	}
}
