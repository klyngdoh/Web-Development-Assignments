import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widget: Widget;
  widgetId: string;
  ytname: string;
  yttext: string;
  yturl: string;
  ytwidth: string;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
      }
    );
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.ytname = 'YT' + this.widget['_id'];
    this.yttext = this.widget['text'];
    this.yturl = this.widget['url'];
    this.ytwidth = this.widget['width'];
  }

  toWidgetList() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  toProfile() {
    this.router.navigate(['user', this.userId]);
  }
}
