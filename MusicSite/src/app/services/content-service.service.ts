import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { MUSICLIST } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private messageService: MessageService) { }

  getContent(): Observable<Content[]> {
    this.messageService.addMessage("Content Retrieved!");
    return of(MUSICLIST);
  }
}
