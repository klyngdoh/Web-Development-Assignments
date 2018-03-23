import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widget: Widget;
  widgetId: string;
  headername: string;
  headertext: string;
  headersize: number;

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
    this.headername = this.widget['_id'];
    this.headertext = this.widget['text'];
    this.headersize = this.widget['size'];
  }

  toWidgetList() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  toProfile() {
    this.router.navigate(['user', this.userId]);
  }

}
