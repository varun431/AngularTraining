import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemlComponent } from './deml/deml.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CurrencyComponent } from './containers/currency/currency.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { ZipCodeDirective } from './directives/zip-code.directive';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from './ui/ui.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
    declarations: [
        // Register component, directive, and pipe
        AppComponent,
        DemlComponent,
        ProductComponent,
        ProductListComponent,
        CurrencyComponent,
        ConversionPipe,
        ImgFallbackDirective,
        TemplateDrivenComponent,
        ModelDrivenComponent,
        ZipCodeDirective,
        ErrorPageComponent
    ],
    imports: [
        // Register dependency modules
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        UiModule
    ],
    providers: [
        // For singleton class. Global services / data sharing services
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
