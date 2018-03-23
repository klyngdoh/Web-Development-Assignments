import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Page} from '../models/page.model.client';

@Injectable()

export class PageService {

  constructor() {}

  pages: Page[] =  [
    new Page('321', 'Post 1', '456', 'Lorem'),
    new Page('432', 'Post 2', '567', 'Lorem'),
    new Page('543', 'Post 3', '678', 'Lorem')
  ];

  api = {
    'createPage': this.createPage,
    'findPageById': this.findPageById,
    'findPageByWebsite': this.findPageByWebsite,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage,
    'getPageNames': this.getPageNames
  };

  createPage(websiteId: string, page: any) {
    page.developerId = websiteId;
    this.pages.push(page);
    return page;
  }

  getPageNames(pages: Page[]) {
    const pageNames = [];
    for (let x = 0; x < pages.length; x++) {
      pageNames.push(pages[x].name);
    }
    return pageNames;
  }

  findPageByWebsite(websiteId: string) {
    const pagesByWebsite = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        pagesByWebsite.push(this.pages[x]);
      }
    }
    return pagesByWebsite;
  }

  findPageById(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
  }

  updatePage(pageId: string, page: any) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x] = page;
        return this.pages[x];
      }
    }
  }


  deletePage(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1);
      }
    }
  }

}
