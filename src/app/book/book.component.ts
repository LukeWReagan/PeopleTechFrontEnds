// ViewChild and ElementRef are imported below for jsPDF
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookService } from "../services/book.service";
import { Book } from '../_models/book';
import { Name } from '../_models/name';
import { first } from 'rxjs/operators';
import * as jsPDF from "jspdf";
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterPipe } from 'ngx-filter-pipe';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public searchText : any;
  public toPDF: FormGroup;
  currentBook: Book;
  books: Book[] = [];
  names: Name[] = [];
  userFilter: any = { name: ''};
  // @viewChiled line below used for jsPDF
  @ViewChild('content') content: ElementRef;

  public bookData: any;
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private filterPipe: FilterPipe,
  ) { }

  ngOnInit() {
    this.toPDF = this.formBuilder.group({
      location: [""]
    });
    this.loadAllBooks();
    this.loadRandomData();
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
    doc.fromHTML(content.innerHTML, 30, 10, {
      'width': 190,
      'elementHandlers' : specialElementHandlers
    });
    doc.save('book.pdf')
  }
  
  private loadRandomData() {
    this.bookService.getName().pipe(first()).subscribe(names => { 
        this.names = names;
    });
  }
}
