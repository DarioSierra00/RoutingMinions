import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MinionsNavBarComponent } from './minionsNavBar/minionsNavBar.component';
import { MinionsComponent } from './minions/minions.component';
import { Minion } from './interface/minion';
import { MinionsFiltradosComponent } from './minions-filtrados/minions-filtrados.component';
import { MinionService } from './services/minion.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MinionsNavBarComponent,MinionsComponent,MinionsFiltradosComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primerProyectoAngular';


  
}
