import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'tournament/:id',
    loadChildren: () => import('./tournament/tournament.module').then(m => m.TournamentModule) },
  {path: 'currentTournament', redirectTo: '/tournament/current'},
  { path: '', redirectTo: 'tournament/current', pathMatch: 'full'},
  { path: 'tournaments', loadChildren: () => import('./tournaments/tournaments.module').then(m => m.TournamentsModule) },
    { path: '**', loadChildren: () => import('./empty/empty.module').then(m => m.EmptyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
