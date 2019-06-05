import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from "./services/apixu.service";
import { BookComponent } from './book/book.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { GrdFilterPipe } from './pipes/grd-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LongTextComponent } from './long-text/long-text.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BookComponent,
    SelectBoxComponent,
    GrdFilterPipe,
    LongTextComponent
  ],
  imports: [
    FilterPipeModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularDualListBoxModule,
    NgxPaginationModule,
    CommonModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
