import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SidePanelState } from 'src/app/models/side-panel-state.enum';
import { Sidepanelservice } from 'src/app/service/sidepanel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _subscriptionsSubject$: Subject<void>;
  public currentPanelState: SidePanelState | undefined;
  userDetail:any

  constructor(private _sidePanelService: Sidepanelservice) {
    this._subscriptionsSubject$ = new Subject<void>();
  }
  

  ngOnInit(): void {
    this._sidePanelService
      .panelStateChanges
      .pipe(takeUntil(this._subscriptionsSubject$))
      .subscribe((state: SidePanelState) => this.currentPanelState = state);
      let user:any =  localStorage.getItem('userdetail')
      this.userDetail = JSON.parse(user)[0];
  }

  public handleSingleClick(): void {
    console.log('single click');
    if (this.currentPanelState === SidePanelState.CLOSE || this.currentPanelState === SidePanelState.COLLAPSE) {
      this._sidePanelService.changeState(SidePanelState.OPEN);
    } else { 
      this._sidePanelService.changeState(SidePanelState.COLLAPSE);
    }
  }

  public handleDoubleClick(): void {
    console.log('double click');
    if (this.currentPanelState === SidePanelState.CLOSE) {
      this._sidePanelService.changeState(SidePanelState.OPEN)
    } else {
      this._sidePanelService.changeState(SidePanelState.CLOSE);
    }
  }

  public logout():void{

  }

  ngOnDestroy(): void {
    this._subscriptionsSubject$.next();
    this._subscriptionsSubject$.complete();
  }
}
