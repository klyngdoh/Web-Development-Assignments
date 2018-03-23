import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  pageId: string;
  page: Page;
  pagename: string;
  websiteId: string;
  description: string;
  userId: string;

  constructor(private pageService: PageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.pageId = params['pid'];
        this.websiteId = params['wid'];
        this.userId = params['userId'];
      }
    );
    this.page = this.pageService.findPageById(this.pageId);
    this.pagename = this.page['name'];
    this.description = this.page['description'];
  }

  toProfile() {
    this.router.navigate(['user', this.userId]);
  }

  toPageList() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
  }

}
