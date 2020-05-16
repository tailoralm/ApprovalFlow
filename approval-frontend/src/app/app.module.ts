import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateSolicitationComponent } from './create-solicitation/create-solicitation.component';
import { SolicitationListComponent } from './solicitation-list/solicitation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSolicitationComponent,
    SolicitationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
