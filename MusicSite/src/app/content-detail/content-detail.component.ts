import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Content} from "../helper-files/content-interface";
import {ContentServiceService} from "../services/content-service.service";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id: number = 0;
  content: any = {};


  constructor(
    private route: ActivatedRoute,
    private contentServiceService: ContentServiceService,
    private location: Location) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameters => {
      this.id = Number(parameters.get("id"));

        this.contentServiceService.getContentItem(this.id).subscribe(
          c => {this.content = c;
            console.log(this.content);
          });
      });

  }

}
