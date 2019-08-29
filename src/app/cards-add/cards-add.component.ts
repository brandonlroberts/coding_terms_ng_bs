import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card/card.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../entities/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cards-add',
  templateUrl: './cards-add.component.html',
  styleUrls: ['./cards-add.component.css']
})
export class CardsAddComponent implements OnInit {
  closeResult: string;
  card: Card = {
    id: null,
    cardHeader: '',
    cardText: ''
  };

  constructor(private cardService: CardService, private modalService: NgbModal, private http: HttpClient) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  addCard(card) {
    const newCard: Card = {
      id: card.id,
      cardHeader: card.cardHeader,
      cardText: card.cardText
    };

    const apiUrl = 'https://localhost:44333/api/cards/';
    this.cardService.create(apiUrl, newCard).subscribe();
    this.modalService.dismissAll();
    location.reload();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {

  }
}






