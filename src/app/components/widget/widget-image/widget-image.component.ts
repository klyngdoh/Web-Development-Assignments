import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widget: Widget;
  widgetId: string;
  imagename: string;
  imagetext: string;
  imageurl: string;
  imagewidth: string;

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
    this.imagename = 'image' + this.widget['_id'];
    this.imagetext = this.widget['text'];
    this.imageurl = this.widget['url'];
    this.imagewidth = this.widget['width'];
  }

  toWidgetList() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  toProfile() {
    this.router.navigate(['user', this.userId]);
  }

}
