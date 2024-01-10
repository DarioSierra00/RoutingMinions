import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MinionService } from '../services/minion.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minionsNavBar',
  standalone: true,
  imports: [FormsModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './minionsNavBar.component.html',
  styleUrl: './minionsNavBar.component.css'
})

export class MinionsNavBarComponent {
  termino:string = ""; 

  constructor(private router : Router){}


  @Output() emitir:EventEmitter<string> = new EventEmitter<string>();

  setTermino(){
    this.emitir.emit(this.termino);
  }

  toGo(){
    this.router.navigate(['/minion',this.termino])
  }
}
