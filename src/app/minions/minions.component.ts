import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../interface/minion';
import { CommonModule } from '@angular/common';
import { MinionService } from '../services/minion.service';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minions.component.html',
  styleUrl: './minions.component.css'
})
export class MinionsComponent{
  
  @Input() minions : Minion[] = []
  
  favorites:Minion[]= [];

  addFavorite(minionName:Minion){
    this.favorites.push(minionName);
  }


  removeFavorite(minion:Minion){
    this.favorites.splice(this.favorites.indexOf(minion),1);
  }

}
