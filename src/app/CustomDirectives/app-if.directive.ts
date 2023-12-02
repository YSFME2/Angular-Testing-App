import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Display } from '../Models/Enums/Display';

@Directive({
  selector: '[appIf]',
})
export class AppIfDirective {
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('appIf') set Display(value: Display) {
    if (value == Display.Visible) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
