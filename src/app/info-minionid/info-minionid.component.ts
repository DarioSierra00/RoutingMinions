import { Component, Input, OnChanges } from '@angular/core';
import { MinionService } from '../services/minion.service';
import { Minion } from '../interface/minion';

@Component({
  selector: 'app-info-minionid',
  standalone: true,
  imports: [],
  templateUrl: './info-minionid.component.html',
  styleUrl: './info-minionid.component.css'
})
export class InfoMinionidComponent implements OnChanges{
  @Input() id : string = "";
  minions! : Minion[];

  constructor(private minionService : MinionService){}

  ngOnChanges(){
    this.minionService.getMinionsById(this.id).subscribe({
      next : (min) => this.minions = min
    });

  }
}
