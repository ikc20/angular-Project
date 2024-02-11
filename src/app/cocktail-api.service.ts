import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailApiService {
  private readonly url = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  public getDrinks(): Observable<any> {
    const endpoint = `${this.url}/filter.php?c=Ordinary_Drink`;
    return this.http.get<any>(endpoint);
  }
}
