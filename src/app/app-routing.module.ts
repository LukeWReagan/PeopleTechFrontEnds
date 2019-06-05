import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { BookComponent } from './book/book.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { LongTextComponent } from './long-text/long-text.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'book', component: BookComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'select', component: SelectBoxComponent },
  { path: 'text', component: LongTextComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
