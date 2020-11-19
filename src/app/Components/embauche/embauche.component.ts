import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';
import { EmbaucheService } from 'src/app/Services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  public personnesEmbauchees: Personne[] = [];

  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.personnesEmbauchees = this.embaucheService.getPersonnesEmbauchees();
  }

}
