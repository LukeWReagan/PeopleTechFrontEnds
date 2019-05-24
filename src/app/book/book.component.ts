import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";
import { Book } from '../_models/book';
import { first } from 'rxjs/operators';
import * as jsPDF from "jspdf";
import  html2canvas  from "html2canvas";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public toPDF: FormGroup;
  currentBook: Book;
  books: Book[] = [];

  public bookData: any;
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.toPDF = this.formBuilder.group({
      location: [""]
    });
    this.loadAllBooks();
  }

  private loadAllBooks() {
    this.bookService.getBook().pipe(first()).subscribe(books => { 
        this.books = books;
    });
  }

  public captureScreen() {
    const data = document.getElementById('html-table');
    (window as any).html2canvas = html2canvas;
    const doc = new jsPDF(
      'p', 'pt', 'a4'
    );
    doc.html(data, {
      callback(pdf) {
        pdf.save('cv-a4.pdf');
      }
    });
  }
}
