import { Injectable } from '@angular/core';
import { MarvelHero } from 'helper-files/MarvelHero';
import { Observable, of } from 'rxjs';
import { CONTENT } from '../contentDB';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): MarvelHero[] {
    return CONTENT;
  }
  getContentObs(): Observable<MarvelHero[]> {
    return of(CONTENT);
  }
}
