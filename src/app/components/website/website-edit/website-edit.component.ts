import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  websiteId: string;
  name: string;
  devId: string;
  description: string;
  website: Website;
  userId: string;

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.websiteId = params['wid'];
        this.userId = params['userId'];
      }
    );

    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.name = this.website['name'];
    this.description = this.website['description'];
  }

  toPageList(wid: string) {
    this.router.navigate(['user', this.userId, 'website', wid, 'page']);
  }

  toWebsiteList() {
    this.router.navigate(['user', this.userId, 'website']);
  }

  toProfile() {
    this.router.navigate(['user', this.userId]);
  }
}
