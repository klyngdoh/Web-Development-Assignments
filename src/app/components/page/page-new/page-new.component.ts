import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

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
  }

    toProfile() {
      this.router.navigate(['user', this.userId]);
    }

    toPageList() {
      this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
    }
}

