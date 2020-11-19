import { Injectable } from '@angular/core';
import { Personne } from '../Models/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  public personnes: Personne[] = [];
  
  constructor() {
    this.personnes = [
      new Personne(1, 'Ackermann', 'Mikasa', 'Soldier', 'mikasa.jpg', 123456, 22),
      new Personne(2, 'Ackermann', 'Levi', 'Scouts Leader', 'levi.png', 123456, 38),
      new Personne(3, 'Jean', 'Kristein', 'Soldier', 'jean.jpg', 123456, 25),
    ];
   }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
  
}
