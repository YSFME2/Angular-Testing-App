import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAppGen]'
})
export class AppGenDirective {

  constructor(private templateRef:TemplateRef<any>,) { }

}
