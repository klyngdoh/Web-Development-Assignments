export class Widget {
  _id: string;
  widgetType: string;
  pageId: string;
  text: string;
  url: string;
  size: number;
  width: string;


  constructor(_id, widgetType, pageId, text, url, size, width) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.text = text;
    this.url = url;
    this.size = size;
    this.width = width;
  }
}
