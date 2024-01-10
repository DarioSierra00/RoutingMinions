import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MinionsFiltradosComponent } from './minions-filtrados/minions-filtrados.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InfoMinionComponent } from './info-minion/info-minion.component';

export const routes: Routes = [
    {path : '', component: IndexComponent},
    {path : 'index', component: IndexComponent},
    {path : 'minion',component: MinionsFiltradosComponent,
    children: [{
        path: 'minionDiv/:name', component: InfoMinionComponent
    }]
    },
    {path: 'minion/:name',component: InfoMinionComponent},
    {path: '**',component: NotFoundComponent}
];
