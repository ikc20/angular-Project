// DrinkListComponent.ts
import { Component, Input } from '@angular/core';
import { EditDrinkFormComponent } from '../edit-drink-form/edit-drink-form.component';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent {

    @Input() drinks: { type: string, quantity: number }[] = [];

  editDrink(drink: { type: string, quantity: number }) {
    // Implement logic to handle edit action
    console.log('Editing drink:', drink);
  }
}
