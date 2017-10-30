import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CrudComponent } from './crud/crud.component';
import {CrudlistComponent} from './crud/crudlist.component';
import {CrudeditComponent} from './crud/crudedit.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import {routing} from './app.routing';
import { ContactusComponent } from './contactus/contactus.component';
import {HeaderComponent,FooterComponent} from './layout';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    CrudComponent,
    CrudlistComponent,
    CrudeditComponent,
    PageNotFoundComponentComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent,
    TermsComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
