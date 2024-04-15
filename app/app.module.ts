import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyComponent } from './company/company.component';
import { VacancyComponent } from './vacancy/vacancy.component';

@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
        { path:'', component: CompanyComponent},
      ]),
    ],
    declarations: [
        AppComponent,
        CompanyComponent,
        VacancyComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}