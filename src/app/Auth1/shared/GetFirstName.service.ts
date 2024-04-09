import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFirstName {
  userDetailsUpdated: Subject<{ firstName: string, lastName: string }> = new Subject();

  constructor() {}

  emitUserDetailsUpdated(userDetails: { firstName: string, lastName: string }) {
    this.userDetailsUpdated.next(userDetails);
  }
}