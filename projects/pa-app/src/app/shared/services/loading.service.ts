import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(true);
  public loading$ = this._loading.asObservable();

  setLoading(isLoading: boolean) {
    this._loading.next(isLoading);
  }
}
