import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnDestroy {
  searchText: string;
  subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.queryParamMap.subscribe(
      (queryParams) => {
        this.searchText = queryParams.get('q');
      }
    );
  }
  ngOnDestroy(): void {
    if (this.subscription != null && this.subscription != undefined)
      this.subscription.unsubscribe();
  }
}
