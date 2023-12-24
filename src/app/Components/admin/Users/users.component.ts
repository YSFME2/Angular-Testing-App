import { Component, DoCheck, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements DoCheck, OnDestroy {
  userId: number;
  paramMapObs: Subscription;
  constructor(private route: ActivatedRoute, private router: Router) {
    // this.paramMapObs = this.route.params.subscribe((param) => {
    //   var id:number = +param['id'];
    //   console.log(id);
    //   if (isNaN(id)) router.navigate(['NotFoundPage']);
    //   else this.userId = id;
    // });
    this.paramMapObs = this.route.paramMap.subscribe((param) => {
      var id: number = +param.get('id');
      console.log(id);
      if (isNaN(id)) router.navigate(['NotFoundPage']);
      else this.userId = id;
    });
  }
  ngOnDestroy(): void {
    if (this.paramMapObs) {
      this.paramMapObs.unsubscribe();
    }
  }
  ngDoCheck(): void {
    // var id: number = +this.route.snapshot.params['id'];
    // console.log(id);
    // if (isNaN(id)) this.router.navigate(['NotFoundPage']);
    // else this.userId = id;
  }
}
