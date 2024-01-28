import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DashboardLayoutConfiguration } from 'src/app/models/dashboard-layout-configuration.model';
import { SidePanelPosition } from 'src/app/models/side-panel-position.enum';
import { SidePanelState } from 'src/app/models/side-panel-state.enum';
import { Sidepanelservice } from 'src/app/service/sidepanel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  public configuration: DashboardLayoutConfiguration;

  private _subscriptionsSubject$: Subject<void>;
  public currentPanelState!: SidePanelState;

  constructor(private _sidePanelService: Sidepanelservice) {
    this._subscriptionsSubject$ = new Subject<void>();
    this.configuration = new DashboardLayoutConfiguration(SidePanelPosition.LEFT, SidePanelState.OPEN);
    this._sidePanelService.changeState(this.configuration.initialSidePanelState)
  }

  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
    this._sidePanelService
      .panelStateChanges
      .pipe(takeUntil(this._subscriptionsSubject$))
      .subscribe((state: SidePanelState) => this.currentPanelState = state);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    // @@@ May have to rethink
    const width: number = window.innerWidth;
    if (width < 768) 
      this._sidePanelService.changeState(SidePanelState.CLOSE);
    else if (width < 991)
      this._sidePanelService.changeState(SidePanelState.COLLAPSE);
    else
      this._sidePanelService.changeState(SidePanelState.OPEN);
  }
  
  ngOnDestroy(): void {
    this._subscriptionsSubject$.next();
    this._subscriptionsSubject$.complete();
  }

}
