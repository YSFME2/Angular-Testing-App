import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor() { }

  public Subscribe(){
    alert("Thank you for subscription!!");
  }
}
