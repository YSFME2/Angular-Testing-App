import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appstyle]',
})
export class AppStyleDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @Input('appstyle') set Style(value: object) {
    let entries = Object.entries(value);
    for (let item of entries) {
      this.renderer.setStyle(this.elementRef.nativeElement, item[0], item[1]);
    }
  }
}
