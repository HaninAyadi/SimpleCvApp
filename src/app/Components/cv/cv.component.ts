import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selectedPersonne: Personne = new Personne();
  constructor() { }

  ngOnInit(): void {
  }
  
  catchSelectedPersonne(forwardedPersonne: Personne) {
    this.selectedPersonne = forwardedPersonne;
  }

}
