import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-drink-form',
  templateUrl: './edit-drink-form.component.html',
  styleUrls: ['./edit-drink-form.component.css']
})
export class EditDrinkFormComponent {
  @Input()   drink: { type: string, quantity: number } = { type: '', quantity: 0 };
  @Output() save = new EventEmitter<{ type: string, quantity: number }>();
  editedDrink: { type: string, quantity: number } = { type: '', quantity: 0 };

  ngOnInit() {
    // Initialize editedDrink with the drink passed from parent
    this.editedDrink = { ...this.drink };
  }

  saveChanges() {
    // Emit save event with edited drink details
    this.save.emit(this.editedDrink);
  }
}
