import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';
import { CvService } from 'src/app/Services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public personnes: Personne[] = [];

  @Output() forwardSelectedPersonne = new EventEmitter();
  constructor(private cvService: CvService) {}
  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }
  forwardPersonne(selectedPersonne: Personne) {
    this.forwardSelectedPersonne.emit(
      selectedPersonne
    );
  }
}

