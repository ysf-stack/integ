import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LoadingService} from "../../../../shared/services/loading.service";

@Component({
  selector: 'app-internal-server-error',
  templateUrl: './internal-server-error.component.html',
  styleUrls: ['./internal-server-error.component.css']
})
export class InternalServerErrorComponent implements OnInit, OnDestroy {
  private serverCheckSubscription: Subscription | undefined;

  constructor(private _loadingService: LoadingService,) {
  }

  ngOnInit() {
    this._loadingService.setLoading(false);
  }

  ngOnDestroy(): void {
    if (this.serverCheckSubscription) {
      this.serverCheckSubscription.unsubscribe();
    }
  }
}
