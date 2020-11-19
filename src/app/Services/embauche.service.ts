import { Injectable } from '@angular/core';
import { Personne } from '../Models/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  

  public personnesEmbauchees: Personne[] = [];
  constructor() { }

  embaucher(personne: Personne) {    
    this.personnesEmbauchees.push(personne);
  }

  getPersonnesEmbauchees(){
    return this.personnesEmbauchees;
  }

}
