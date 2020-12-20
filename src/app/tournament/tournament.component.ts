import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from 'rxjs';

import {Tournament} from '../shared/models/Tournament';
import { TournamentService } from '../shared/services/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit, OnDestroy {
  public id: string;
  public tournament: Tournament;

  private routeSub: Subscription;

  constructor(private tournamentService: TournamentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['id'];

      if (this.id != null) {
        if (this.id === 'current') {
          this.tournamentService.getCurrentTournament();
        } else {
          this.tournamentService.getTournament(this.id);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
