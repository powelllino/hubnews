import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class TopHeadersService {

	topHeadersURL = 'https://newsapi.org/v2/top-headlines?country=br&pageSize=3&apiKey=49b8d566b15a4834b9723e58a07aa389';

  constructor(private http: HttpClient) { }

  listar = (): Observable<any> => {
  	return this.http.get(`${this.topHeadersURL}`);
  }

}
