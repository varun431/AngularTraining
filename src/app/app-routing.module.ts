import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DemlComponent } from './deml/deml.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: '', component: DemlComponent, pathMatch: 'full' },
    { path: 'products', component: ProductListComponent },
    {
        path: 'forms',
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'template', pathMatch: 'full' },
            { path: 'template', component: TemplateDrivenComponent },
            { path: 'model/:name', component: ModelDrivenComponent }
        ]
    },
    // tslint:disable-next-line: max-line-length
    { path: '**', component: ErrorPageComponent } // This route should be last entry because this is a wildcard that can handle all the pages.
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
