import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
      'https://api.apixu.com/v1/current.json?key=030633e3372c470aad2184029192305&q=' + location)
  }
}
