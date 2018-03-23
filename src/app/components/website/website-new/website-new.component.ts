import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: string;
  websites: Website[];
  websiteNames: string[];
  website: Website;

  constructor(private route: ActivatedRoute, private websiteService: WebsiteService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
      }
    );
    this.websites = this.websiteService.findWebsiteByUser(this.userId);
    this.websiteNames = this.websiteService.getWebsiteNames(this.websites);
  }

  toProfile() {
    this.router.navigate(['user', this.userId]);
  }

  toNewWebsite() {
    this.router.navigate(['user', this.userId, 'website', 'new']);
  }

  toEditWebsite(wid: string) {
    this.router.navigate(['user', this.userId, 'website', wid]);
  }

  toPageList(wid: string) {
    this.router.navigate(['user', this.userId, 'website', wid, 'page']);
  }

  toWebsiteList() {
    this.router.navigate(['user', this.userId, 'website']);
  }
}
