import { Component } from '@angular/core';

export enum TabTypes{
About,
Info,
Services,
Privacy
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  public Selected: TabTypes = TabTypes.About;
  public TabTypes = TabTypes;
  SelectAbout() {
    this.Selected = TabTypes.About;
  }
  SelectInfo() {
    this.Selected = TabTypes.Info;
  }
  SelectPrivacy() {
    this.Selected = TabTypes.Privacy;
  }
  SelectServices() {
    this.Selected = TabTypes.Services;
  }
}
