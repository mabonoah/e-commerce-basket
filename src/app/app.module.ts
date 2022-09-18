import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BasketComponent } from './components/basket/basket.component';
import { basketReducer } from './store/basket-reducer';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ basketProducts: basketReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
