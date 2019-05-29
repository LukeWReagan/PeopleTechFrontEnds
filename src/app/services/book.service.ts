import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../_models/book';
import { Name } from '../_models/name';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBook(){
    return this.http.get<Book[]>(
      'https://localhost:44340/api/book')
  }

  getName(){
    return this.http.get<Name[]>(
      'assets/test.json')
  }
}
