import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      }
    );
  }

  toWidgetList() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  toWidgetEdit(type: string) {
    const newWidget = this.widgetService.createWidget(this.widgetService.getNewId(), type, this.pageId, '', '', 0, '');
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', newWidget._id]);
  }

  toProfile() {
    this.router.navigate(['user', this.userId]);
  }
}
