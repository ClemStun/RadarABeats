import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestMusiqueComponent } from './components/test-musique/test-musique.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BtnSidebarComponent } from './components/btn-sidebar/btn-sidebar.component';
import { DarkerComponent } from './components/darker/darker.component';
import { CarteComponent } from './components/carte/carte.component';
import { ContacterComponent } from './components/contacter/contacter.component';
import { AProposComponent } from './components/apropos/apropos.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestMusiqueComponent,
    SidebarComponent,
    BtnSidebarComponent,
    DarkerComponent,
    CarteComponent,
    ContacterComponent,
    AProposComponent,
    SafePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
