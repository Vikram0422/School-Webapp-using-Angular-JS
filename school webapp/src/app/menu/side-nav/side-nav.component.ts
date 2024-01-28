import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavigationLink } from 'src/app/models/navigation-link.model';
import { SidePanelState } from 'src/app/models/side-panel-state.enum';
import { Sidepanelservice } from 'src/app/service/sidepanel.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input()
  public links: NavigationLink[] | undefined;

  private _subscriptionsSubject$: Subject<void>;
  public currentPanelState!: SidePanelState;
  public SidePanelState = SidePanelState;

  constructor(private _sidePanelService: Sidepanelservice) {
    this._subscriptionsSubject$ = new Subject<void>();
  }

  ngOnInit(): void {
    this._sidePanelService.panelStateChanges
      .pipe(takeUntil(this._subscriptionsSubject$))
      .subscribe((state: SidePanelState) => this.currentPanelState = state);
  }

  ngOnDestroy(): void {
    this._subscriptionsSubject$.next();
    this._subscriptionsSubject$.complete();
  }
}
