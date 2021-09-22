import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  public musicList: ContentList;
  constructor() {
    let newContent: Content;
    this.musicList = new ContentList();

    newContent = {
      id: 0,
      author: 'Dragonforce',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Through_the_Fire_and_Flames_Cover_Art.jpg',
      type: 'power metal',
      title: 'Through The Fire And The Flames',
      body: 'A legendary song with too many solos',
      tags: ['gh3', 'double solos', 'epic']
    };
    this.musicList.add(newContent);
    newContent = {
      id: 1,
      author: 'Metallica',
      type: 'metal',
      title: 'Enter the Sandman',
      body: 'This one was really hard on drums on rock band',
    };
    this.musicList.add(newContent);
    newContent = {
      id: 2,
      author: 'Ed Sheeran',
      title: 'Perfect',
      body: 'Actually really talented',
      tags: ['relationship goals']
    };
    this.musicList.add(newContent);

  }

  ngOnInit(): void {
  }

}
