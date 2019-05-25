// ViewChild and ElementRef are imported below for jsPDF
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookService } from "../book.service";
import { Book } from '../_models/book';
import { first } from 'rxjs/operators';
import * as jsPDF from "jspdf";
import * as html2canvas  from "html2canvas";
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
  // @viewChiled line below used for jsPDF
  @ViewChild('content') content: ElementRef;

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
  // This is the logic needed for jsPDF to properly save and fit screen 
  public downloadPDF() {
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor' : function(element, renderer) {

      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers' : specialElementHandlers
    });
    doc.save('book.pdf')
  }
}
