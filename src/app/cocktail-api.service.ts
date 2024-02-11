import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailApiService {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  getDrinks(): Observable<any> {
    const url = `${this.baseUrl}/filter.php?c=Ordinary_Drink`;
    return this.http.get<any>(url);
  }
}
