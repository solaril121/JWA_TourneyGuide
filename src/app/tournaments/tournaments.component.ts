import { Component, OnInit } from '@angular/core';

import {Tournament} from '../shared/models/Tournament';
import {TournamentService} from '../shared/services/tournament.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
  public tournamentList: Tournament[];

  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.tournamentList = this.tournamentService.getTournamentList();
  }

}
