import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "./apixu.service";
import { BookComponent } from './book/book.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BookComponent,
    SelectBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularDualListBoxModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
