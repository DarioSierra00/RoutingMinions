import { Injectable } from '@angular/core';
import { Minion } from '../interface/minion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class MinionService {

  constructor(private http : HttpClient) {
    console.log("Servicio iniciado")
   }
   private url : string = "http://localhost:3000/minions";

   
   getMinions(): Observable<Minion[]>{
    return this.http.get<Minion[]>(this.url);
   }



  getMinionsByName(name:string): Observable<Minion[]>{
    
   return this.http.get<Minion[]>(this.url+"?name="+name)
    
   }

   getMinionsById(id:string): Observable<Minion[]>{
    return this.http.get<Minion[]>(this.url+"?id="+id)
    }
}
