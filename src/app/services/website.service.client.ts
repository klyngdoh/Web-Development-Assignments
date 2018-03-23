import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Website} from '../models/website.model.client';

@Injectable()

export class WebsiteService {

  constructor() {}

  websites: Website[] = [
    new Website('123', 'Facebook', '456', 'Lorem'),
    new Website('234', 'Tweeter', '456', 'Lorem'),
    new Website('456', 'Gizmodo', '234', 'Lorem'),
    new Website('890', 'Go', '123', 'Lorem'),
    new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
    new Website('678', 'Checkers', '123', 'Lorem'),
    new Website('789', 'Chess', '234', 'Lorem'),
  ];

  api = {
    'createWebsite': this.createWebsite,
    'findWebsiteById': this.findWebsiteById,
    'findWebsiteByUser': this.findWebsiteByUser,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite,
    'getWebsiteNames': this.getWebsiteNames
  };

  createWebsite(userId: string, website: any) {
    website.developerId = userId;
    this.websites.push(website);
    return website;
  }

  getWebsiteNames(websites: Website[]) {
    const websiteNames = [];
    for (let x = 0; x < websites.length; x++) {
      websiteNames.push(websites[x].name);
    }
    return websiteNames;
  }

  findWebsiteByUser(userId: string) {
    const websitesByUser = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        websitesByUser.push(this.websites[x]);
      }
    }
    return websitesByUser;
  }

  findWebsiteById(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites[x];
      }
    }
  }

  updateWebsite(websiteId: string, website: any) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x] = website;
        return this.websites[x];
      }
    }
  }


  deleteWebsite(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites.splice(x, 1);
      }
    }
  }

}
