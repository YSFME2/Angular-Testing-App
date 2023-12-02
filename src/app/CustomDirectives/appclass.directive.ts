import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appclass]',
})
export class AppClassDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input('appclass')
  set setStyle(value: object) {
    let entries = Object.entries(value);
    for(let item of entries){
      if (item[1] == true) {
        this.renderer.addClass(this.elementRef.nativeElement, item[0]);
      }
    }
    console.log();
  }
}
