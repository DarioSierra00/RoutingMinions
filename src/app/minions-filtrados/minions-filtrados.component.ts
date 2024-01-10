import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../interface/minion';
import { MinionService } from '../services/minion.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minions-filtrados',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './minions-filtrados.component.html',
  styleUrl: './minions-filtrados.component.css'
})
export class MinionsFiltradosComponent implements OnInit{
  @Input() minions:Minion[] = [];
  @Input() searchTerm : string = "";

  constructor(private minionService : MinionService){}

  ngOnInit(): void {
    this.minions = this.minionService.getMinions();
  }
}
