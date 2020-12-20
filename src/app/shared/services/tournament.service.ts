import { Injectable } from '@angular/core';
import {Tournament} from '../models/Tournament';
import tournamentList from '../data/tournaments.data.json';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {

  constructor() { }

  public getTournamentList(): Tournament[] {
    return tournamentList;
  }

  public getTournament(id: string): Tournament {
    return new Tournament();
  }

  public getCurrentTournament(): Tournament {
    let currentTournament: Tournament;
    let tourneyList: Tournament[];

    tourneyList = (tournamentList as Tournament[]);

    for (const tournament of tournamentList) {
      if (tournament.isCurrentTournament) {
        currentTournament = tournament;
        break;
      }
    }

    return currentTournament;
  }

}
