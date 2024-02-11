import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditDrinkFormComponent } from './edit-drink-form/edit-drink-form.component'; // Import EditDrinkFormComponent

import { HeaderComponent } from './header/header.component';
import { AddDrinkFormComponent } from './add-drink-form/add-drink-form.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Import platformBrowserDynamic

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AddDrinkFormComponent,
        EditDrinkFormComponent,
        DrinkListComponent
    ],
    providers: [],
    bootstrap: [] // Remove AppComponent from bootstrap
    ,
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HeaderComponent
    ]
})
export class AppModule {
  ngDoBootstrap() {
    // Bootstrap AppModule using the bootstrapModule function
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }
}
