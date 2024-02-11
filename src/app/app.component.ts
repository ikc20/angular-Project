
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// AppComponent.ts
import { Component } from '@angular/core';
import { EditDrinkFormComponent } from './edit-drink-form/edit-drink-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  drinks: { type: string, quantity: number }[] = [];
  title: any;

  onDrinkAdded(drink: { type: string, quantity: number }) {
    this.drinks.push(drink);
  }
}
