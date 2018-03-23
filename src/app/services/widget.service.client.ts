import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Widget} from '../models/widget.model.client';

@Injectable()

export class WidgetService {

  constructor() {}

  widgets: Widget[] = [
    new Widget('321', 'HEADING', '321', 'GIZMODO', '', 2, ''),
    new Widget('234', 'HEADING', '321', 'Lorem Ipsum', '', 4, ''),
    new Widget('345', 'IMAGE', '321', '', 'http://lorempixel.com/400/200/', 0, '100%'),
    new Widget('456', 'HTML', '321', '<p>Lorem Ipsum</p>', '', 0, ''),
    new Widget('567', 'HEADING', '321', 'Lorem Ipsum', '', 4, ''),
    new Widget('765', 'YOUTUBE', '321', '', 'https://youtube.com/embed/AM2Ivdi9c4E', 0, '100%'),
    new Widget('789', 'HTML', '321', '<p>Lorem Ipsum</p>', '', 0, ''),
  ];

  api = {
    'createWidget': this.createWidget,
    'findWidgetById': this.findWidgetById,
    'findWidgetsByPage': this.findWidgetsByPage,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget,
    'getNewId': this.getNewId
  };

  createWidget(wid: string, wtype: string, pid: string, wtext: string, wurl: string, wsize: number, wwidth: string) {
    const widget = new Widget(wid, wtype, pid, wtext, wurl, wsize, wwidth);
    this.widgets.push(widget);
    return widget;
  }

  getNewId()
  {
    return (this.widgets.length + 1).toString();
  }

  findWidgetsByPage(pageId: string) {
    const widgetsByPage = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        widgetsByPage.push(this.widgets[x]);
      }
    }
    return widgetsByPage;
  }

  findWidgetById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId: string, widget: any) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x] = widget;
        return this.widgets[x];
      }
    }
  }


  deleteWidget(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x, 1);
      }
    }
  }

}
