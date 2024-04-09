// modal.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private showModalSource = new Subject<boolean>();
  showModal$ = this.showModalSource.asObservable();

  toggleModal(show: boolean): void {
    this.showModalSource.next(show);
  }
}
