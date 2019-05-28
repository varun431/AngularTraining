import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[appImgFallback]' // img is used to tell that this directive should be used with img tag in html.
})
export class ImgFallbackDirective {
    // <img appImgFallback />
    // <img appImgFallback="some image url here" />
    // <img [appImgFallback]="variable" />
    @Input() appImgFallback: string; // This name should be same as the selector name

    constructor(private eRef: ElementRef) {}  // In the browser, ElementRef is usually a DOM element.

    @HostListener('error')   // Don't add semicolon after this. And, it should be added just before the eventListener.
    changeSrc() {
        const imageTag: HTMLImageElement = this.eRef.nativeElement;
        imageTag.src = this.appImgFallback || 'assets/index.jpg';
    }
}
