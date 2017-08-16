import {Injectable} from '@angular/core';

@Injectable()
export class BaThemeSpinner {

  private _selector:string = 'preloader';
  private _element:HTMLElement;
  private _selectorcomponentpreloader:string = 'componentpreloader';
  private _elementcomponentpreloader:HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
    this._elementcomponentpreloader = document.getElementById(this._selectorcomponentpreloader);
    this._elementcomponentpreloader.style['display'] = 'none';
  }

  public show():void {
    this._element.style['display'] = 'block';
  }

  public hide(delay:number = 0):void {
    setTimeout(() => {
      this._element.style['display'] = 'none';
    }, delay);
  }

  public showComponentPreloader():void {
    this._elementcomponentpreloader.style['display'] = 'block';
  }

  public hideComponentPreloader(delay:number = 0):void {
    setTimeout(() => {
      this._elementcomponentpreloader.style['display'] = 'none';
    }, delay);
  }
}
