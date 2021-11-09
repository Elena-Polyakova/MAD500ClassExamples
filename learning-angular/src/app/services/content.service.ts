import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelHero } from 'helper-files/MarvelHero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<MarvelHero[]> {
    return this.http.get<MarvelHero[]>("api/bananas");
  }

  addContent(content: MarvelHero): Observable<MarvelHero> {
    return this.http.post<MarvelHero>("api/bananas", content, this.httpOptions);
  }
  updateContent(content: MarvelHero): Observable<any> {
    return this.http.put("api/bananas", content, this.httpOptions);
  }
}
