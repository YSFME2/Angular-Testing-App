import { Component } from '@angular/core';
import { Display } from './Models/Enums/Display';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testing2';

  public DisplayTypes = Display;
}
