import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';
import { EmbaucheService } from 'src/app/Services/embauche.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() personne: Personne = new Personne();
  embauchee:boolean = false;
  constructor(private embaucheSerivce: EmbaucheService) {
    this.embauchee = this.personne.embauche;
   }

  ngOnInit(): void {
  }

  embaucher(){
    if((this.personne.id !== 0) && (this.personne.embauche == false)) {
      this.embaucheSerivce.embaucher(this.personne);
      this.personne.embauche = true;
      this.embauchee = true;}
  }
}
