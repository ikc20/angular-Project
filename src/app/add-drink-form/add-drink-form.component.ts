// AddDrinkFormComponent.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-drink-form',
  templateUrl: './add-drink-form.component.html',
  styleUrls: ['./add-drink-form.component.css']
})
export class AddDrinkFormComponent {
  drinkType: string = '';
  quantity: number = 0;

  @Output() drinkAdded = new EventEmitter<{ type: string, quantity: number }>();

  addDrink() {
    if (this.drinkType && this.quantity) {
      this.drinkAdded.emit({ type: this.drinkType, quantity: this.quantity });
      this.drinkType = '';
      this.quantity = 0;
    }
  }
}
