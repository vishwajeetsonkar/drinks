import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  private baseUrl = 'https://www.thecocktaildb.com/';
  constructor(private _http: HttpClient) { }

  getDrinks() {
    return this._http.get(`${this.baseUrl}/api/json/v1/1/search.php?f=a`);
  }
}
