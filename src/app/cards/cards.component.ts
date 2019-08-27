import { Component, OnInit } from '@angular/core';
import { Card } from '../entities/card';
import { CardService } from '../services/card/card.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: any;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards()
      .subscribe(data => this.cards = data);
  }

}
