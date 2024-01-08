import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MinionsFiltradosComponent } from './minions-filtrados/minions-filtrados.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path : '', component: IndexComponent},
    {path : 'index', component: IndexComponent},
    {path : 'minions',component: MinionsFiltradosComponent},
    {path: '**',component: NotFoundComponent}
];
