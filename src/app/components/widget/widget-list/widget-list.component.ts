import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  websiteId: string;
  userId: string;
  pageId: string;
  widgets: Widget[];

  constructor(private route: ActivatedRoute,
              private widgetService: WidgetService,
              private router: Router, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.websiteId = params['wid'];
        this.userId = params['userId'];
        this.pageId = params['pid'];
      }
    );
    this.widgets = this.widgetService.findWidgetsByPage(this.pageId);
  }

  toEditWidget(wgid: string) {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', wgid]);
  }

  toPageList() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
  }

  toWidgetChooser() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
  }

  toProfile() {
    this.router.navigate(['user', this.userId]);
  }
}
