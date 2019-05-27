import { Directive } from '@angular/core';

@Directive({
  selector: '[appImgFallback]'
})
export class ImgFallbackDirective {
// <img appImgFallback />
// <img appImgFallback="some image url here" />
// <img [appImgFallback]="variable" />
  constructor() { }

}
