import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrinkFormComponent } from './edit-drink-form.component';

describe('EditDrinkFormComponent', () => {
  let component: EditDrinkFormComponent;
  let fixture: ComponentFixture<EditDrinkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDrinkFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDrinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
