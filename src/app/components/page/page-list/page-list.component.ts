import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {

  websiteId: string;
  pages: Page[];
  pageNames: string[];
  page: Page;
  userId: string;
  pageId: string;

  constructor(private route: ActivatedRoute, private pageService: PageService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.websiteId = params['wid'];
        this.userId = params['userId'];
      }
    );
    this.pages = this.pageService.findPageByWebsite(this.websiteId);
    this.pageNames = this.pageService.getPageNames(this.pages);
  }

  toWebsiteList() {
    this.router.navigate(['user', this.userId, 'website']);
  }

  toNewPage() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', 'new']);
  }

  toWidgetList(pid: string) {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', pid, 'widget']);
  }

  toEditPage(pid: string) {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', pid]);
  }

  toProfile() {
    this.router.navigate(['user', this.userId]);
  }
}
