import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cardsUrl = 'api/cards'; // URL to web api

  constructor(private http: HttpClient) {}

  public getCards() {
    return this.http.get(
      `https://codingtermsfordummiesapi.azurewebsites.net/api/values`
    );
  }
}
