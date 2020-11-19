import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne = new Personne();
  @Output() sendPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  selectItem() {
    this.sendPersonne.emit(this.personne);
  }
}
