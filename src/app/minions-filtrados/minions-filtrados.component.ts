import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../interface/minion';
import { MinionService } from '../services/minion.service';

@Component({
  selector: 'app-minions-filtrados',
  standalone: true,
  imports: [],
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
