import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemlComponent } from './deml/deml.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CurrencyComponent } from './containers/currency/currency.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { ImgFallbackDirective } from './directives/img-fallback.directive';

@NgModule({
  declarations: [
    // Register component, directive, and pipe
    AppComponent,
    DemlComponent,
    ProductComponent,
    ProductListComponent,
    CurrencyComponent,
    ConversionPipe,
    ImgFallbackDirective
  ],
  imports: [
    // Register dependency modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // Register services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
