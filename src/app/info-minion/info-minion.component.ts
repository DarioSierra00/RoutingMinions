import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Minion } from '../interface/minion';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MinionService } from '../services/minion.service';

@Component({
  selector: 'app-info-minion',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './info-minion.component.html',
  styleUrl: './info-minion.component.css'
})
export class InfoMinionComponent {

    @Input() name : string = "";
    minions! : Minion[];
    
    constructor(private minionService : MinionService){}

    ngOnChanges(){
      this.minionService.getMinionsByName(this.name).subscribe({
        next : (min) => this.minions = min
      });
    }
}
