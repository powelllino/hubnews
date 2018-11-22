import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class TopultimasService {

	topUltimasURL = 'https://newsapi.org/v2/everything?domains=globo.com&sortBy=publishedAt&apiKey=49b8d566b15a4834b9723e58a07aa389';

  constructor(private http: HttpClient) { }

  listar = (): Observable<any> => {
  	return this.http.get(`${this.topUltimasURL}`);
  }
}
