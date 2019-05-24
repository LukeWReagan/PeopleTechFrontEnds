import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";
import { Book } from '../_models/book';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from '../alert.service';
import { AngularDualListBoxModule } from 'angular-dual-listbox';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  public toPDF: FormGroup;
  currentBook: Book;
  books: Book[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private DualListComponent: AngularDualListBoxModule
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
  source = ['Xbox', 'PlayStation', 'Nintendo', 'PC', 'GameCube', 'WII', 'DreamCast'];
  target = [];
  format = { draggable: true };
}
